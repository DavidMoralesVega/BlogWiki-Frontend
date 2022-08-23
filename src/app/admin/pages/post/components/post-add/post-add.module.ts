import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './containers/post-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryService } from '../../../../../core/services/category.service';
import { SnackBarService } from '../../../../../core/services/mat-snack-bar.service';
import { PostService } from '../../../../../core/services/post.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    PostAddComponent
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
    PostAddComponent
  ],
  providers: [
    CategoryService,
    PostService,
    SnackBarService
  ],
})
export class PostAddModule { }
