import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './container/news.component';
import { ZNavbarModule } from '../../components/z-navbar/z-navbar.module';
import { ZFooterModule } from '../../components/z-footer/z-footer.module';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ZNavbarModule,
    ZFooterModule,
  ]
})
export class NewsModule { }
