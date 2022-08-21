import { Component, Inject, OnInit } from '@angular/core';
import { Category, DialogCategory } from '../../../../../../core/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../../../../core/services/category.service';
import { SnackBarService } from '../../../../../../core/services/mat-snack-bar.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  public GetCategory?: Category;
  public formAdd: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<CategoryUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogCategory: DialogCategory,
    private categoryService: CategoryService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.GetCategory = this.dialogCategory.category;
    this.initForm();
  }

  initForm(): void {
    this.formAdd = new FormGroup({
      CDescription: new FormControl(this.GetCategory?.CDescription, [Validators.required]),
    });
  }

  addData(): void {

    if (this.formAdd.invalid) return;

    let category: Category = {
      CDescription: this.formAdd.value.CDescription,
    };

    this.categoryService.update(this.GetCategory?.IdCategory, category).subscribe({
      next: (category: Category) => this.snackBarService.ShowMessage('success', 'Categoria guardada'),
      error: (e) => this.snackBarService.ShowMessage('error', 'La categoria ya existe'),
      complete: () => this.dialogRef.close(),
    });

  }


}
