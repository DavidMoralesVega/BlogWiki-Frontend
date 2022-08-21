import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './container/category.component';
import { ZNavbarModule } from '../../components/z-navbar/z-navbar.module';
import { ZFooterModule } from '../../components/z-footer/z-footer.module';
import { CategoryService } from '../../../core/services/category.service';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ZNavbarModule,
    ZFooterModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
