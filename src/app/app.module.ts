import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {AuthGuard} from "./helper/auth-guard";
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/homepage/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginlogoutComponent } from "./pages/loginlogout/loginlogout.component";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginlogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AdminAuthGuard,
    AuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
