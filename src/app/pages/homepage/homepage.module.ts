import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import {ListHomeComponent} from "./list-home/list-home.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import { CreateHomeComponent } from './create-home/create-home.component';
import {HomeTimeComponent} from "./home-time/home-time.component";


@NgModule({
  declarations: [
    ListHomeComponent,
    HomeDetailComponent,
    HomeComponent,
    CreateHomeComponent,
    HomeTimeComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
  ]
})
export class HomepageModule { }
