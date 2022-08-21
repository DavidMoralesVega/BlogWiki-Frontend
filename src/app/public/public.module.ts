import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './containers/public.component';
import { ZNavbarModule } from './components/z-navbar/z-navbar.module';
import { ZFooterModule } from './components/z-footer/z-footer.module';


@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ZNavbarModule,
    ZFooterModule
  ]
})
export class PublicModule { }
