import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/authGuard.service';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './public/auth/login/login.module#LoginPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
