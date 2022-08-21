import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from './containers/category-add.component';
import { CategoryService } from '../../../../../core/services/category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarService } from '../../../../../core/services/mat-snack-bar.service';



@NgModule({
  declarations: [
    CategoryAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    CategoryAddComponent
  ],
  providers: [
    CategoryService,
    SnackBarService
  ],
})
export class CategoryAddModule { }
