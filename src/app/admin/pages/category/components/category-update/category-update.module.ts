import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryUpdateComponent } from './containers/category-update.component';
import { SnackBarService } from '../../../../../core/services/mat-snack-bar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryService } from '../../../../../core/services/category.service';



@NgModule({
  declarations: [
    CategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    CategoryUpdateComponent
  ],
  providers: [
    CategoryService,
    SnackBarService
  ],
})
export class CategoryUpdateModule { }
