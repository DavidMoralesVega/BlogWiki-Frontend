import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDeleteComponent } from './containers/category-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryService } from '../../../../../core/services/category.service';
import { SnackBarService } from '../../../../../core/services/mat-snack-bar.service';



@NgModule({
  declarations: [
    CategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports: [CategoryDeleteComponent],
  providers: [
    CategoryService,
    SnackBarService
  ]
})
export class CategoryDeleteModule { }
