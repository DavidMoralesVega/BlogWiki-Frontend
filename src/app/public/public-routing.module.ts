import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from './public.routes';
import { PublicComponent } from './containers/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: PublicRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
