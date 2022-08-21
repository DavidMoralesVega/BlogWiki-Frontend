import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './containers/admin.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import { FooterModule } from './components/footer/footer.module';
import { ZIconModule } from '../core/shared/z-icon/z-icon.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FooterModule,
    SidenavModule,

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    ZIconModule,
    // other
    MatListModule,
    MatIconModule
  ],
})
export class AdminModule { }
