import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import {ListHomeComponent} from "./list-home/list-home.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateHomeComponent } from './create-home/create-home.component';
import {HomeTimeComponent} from "./home-time/home-time.component";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment';


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
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ]
})
export class HomepageModule { }
