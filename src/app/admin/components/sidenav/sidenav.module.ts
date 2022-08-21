import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './containers/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
