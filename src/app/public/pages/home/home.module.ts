import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './containers/home.component';
import { ZIconModule } from 'src/app/core/shared/z-icon/z-icon.module';
import { ZFooterModule } from '../../components/z-footer/z-footer.module';
import { ZNavbarModule } from '../../components/z-navbar/z-navbar.module';
import { PostService } from '../../../core/services/post.service';
import { CategoryService } from 'src/app/core/services/category.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    ZIconModule,
    ZFooterModule,
    ZNavbarModule,

  ],
  providers: [
    PostService,
    CategoryService
  ]
})
export class HomeModule { }
