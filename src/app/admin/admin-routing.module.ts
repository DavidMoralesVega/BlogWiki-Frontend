import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './containers/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: AdminRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
