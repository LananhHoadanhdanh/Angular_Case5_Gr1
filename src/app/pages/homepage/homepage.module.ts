import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import {ListHomeComponent} from "./list-home/list-home.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [
    ListHomeComponent,
    HomeDetailComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
