import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZNavbarComponent } from './containers/z-navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ZIconModule } from 'src/app/core/shared/z-icon/z-icon.module';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoryService } from 'src/app/core/services/category.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ZNavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    ZIconModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [
    ZNavbarComponent
  ],
  providers: [
    CategoryService
  ]
})
export class ZNavbarModule { }
