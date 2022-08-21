import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/login-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule),
  },

  {
    path: 'panel',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    // canLoad: [AuthGuardService],
    canActivate: [AuthGuardService]
  },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    // initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
