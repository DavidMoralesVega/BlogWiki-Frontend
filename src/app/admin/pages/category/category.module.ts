import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './containers/category.component';
import { CategoryService } from '../../../core/services/category.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoryAddModule } from './components/category-add/category-add.module';
import { CategoryDeleteModule } from './components/category-delete/category-delete.module';
import { CategoryUpdateModule } from './components/category-update/category-update.module';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    CategoryAddModule,
    CategoryUpdateModule,
    CategoryDeleteModule
  ],
  providers: [CategoryService]
})
export class CategoryModule { }
