import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
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
