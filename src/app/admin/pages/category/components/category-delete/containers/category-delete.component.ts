import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogCategory, Category } from 'src/app/core/models';
import { CategoryService } from '../../../../../../core/services/category.service';
import { SnackBarService } from '../../../../../../core/services/mat-snack-bar.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  public GetCategory?: Category;

  constructor(
    public dialogRef: MatDialogRef<CategoryDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogCategory: DialogCategory,
    private categoryService: CategoryService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.GetCategory = this.dialogCategory.category;
  }

  delete(): void {
    // review
    this.categoryService.delete(this.GetCategory?.IdCategory || '').subscribe(()=> {
      this.snackBarService.ShowMessage('success', 'Categoria eliminada')
    });
    this.snackBarService.ShowMessage('success', 'Categoria eliminada')
    this.dialogRef.close();

  }
}
