import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { CategoryService } from '../../../../../../core/services/category.service';
import { Category } from '../../../../../../core/models';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})

export class CategoryAddComponent implements OnInit {
  public formAdd: FormGroup = new FormGroup({});
  selectedFiles?: any;
  currentFileUpload!: any;

  constructor(private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CategoryAddComponent>,
    private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formAdd = new FormGroup({
      CDescription: new FormControl('', [Validators.required]),
    });
  }

  addData(): void {

    if (this.formAdd.invalid) return;

    let category = new FormData();
    category.append('file', this.selectedFiles.item(0));
    category.append('CDescription', this.formAdd.value.CDescription);

    this.categoryService.create(category).subscribe({
      next: (category: Category) => this.snackBarService.ShowMessage('success', 'Categoria creada'),
      error: (e) => this.snackBarService.ShowMessage('error', 'La categoria ya existe'),
      complete: () => this.dialogRef.close(),
    });

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
}
