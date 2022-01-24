import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import {ListHomeComponent} from "./list-home/list-home.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";


@NgModule({
  declarations: [
    ListHomeComponent,
    HomeDetailComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
