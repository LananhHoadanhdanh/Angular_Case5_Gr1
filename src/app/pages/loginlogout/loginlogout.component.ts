import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-loginLogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.css']
})
export class LoginlogoutComponent implements OnInit {

  currentUser = localStorage.getItem("currentUser");

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    console.log(this.authenticationService.currentUserValue);
  }
  ngOnInit(): void {
  }
  logout(){
    this.authenticationService.logout()
  }

}
