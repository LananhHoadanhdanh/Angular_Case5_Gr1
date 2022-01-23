import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListHomeComponent} from "./list-home/list-home.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ListHomeComponent
  },
  {
    path:'homeDetail/:id',
    component: HomeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
