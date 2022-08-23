import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './containers/post.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PostAddModule } from './components/post-add/post-add.module';
import { PostUpdateModule } from './components/post-update/post-update.module';
import { PostDeleteModule } from './components/post-delete/post-delete.module';
import { PostService } from '../../../core/services/post.service';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    PostAddModule,
    PostUpdateModule,
    PostDeleteModule
  ],
  providers: [
    PostService,
  ]
})
export class PostModule { }
