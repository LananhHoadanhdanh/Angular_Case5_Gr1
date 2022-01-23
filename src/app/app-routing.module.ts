import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HomeComponent} from "./pages/homepage/home.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {AdminComponent} from "./pages/admin/admin.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path:'admin',
    canActivate: [AdminAuthGuard],
    component: AdminComponent
  },
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
