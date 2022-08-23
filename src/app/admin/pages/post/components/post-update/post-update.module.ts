import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostUpdateComponent } from './containers/post-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CategoryService } from '../../../../../core/services/category.service';
import { PostService } from '../../../../../core/services/post.service';
import { SnackBarService } from '../../../../../core/services/mat-snack-bar.service';


@NgModule({
  declarations: [
    PostUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,

    CKEditorModule,

    AngularEditorModule

  ],
  exports: [
    PostUpdateComponent
  ],
  providers: [
    CategoryService,
    PostService,
    SnackBarService
  ],
})
export class PostUpdateModule { }
