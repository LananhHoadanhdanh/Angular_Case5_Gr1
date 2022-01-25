import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {AuthenticationService} from "../../services/authentication.service";
import { Home } from 'src/app/models/home';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
  address?: string;
  bedroom?: string;
  showerRoom?: string;
  minArea?: string;
  maxArea?: string;
  price?: string;

  homes?: Home[] = [];
  images?: Image[] = [];
  currentUser = localStorage.getItem("currentUser");

  constructor(private homeService: HomeService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout()
  }
}
