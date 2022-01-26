import {Component, OnInit} from '@angular/core';
import {HomeTime} from "../../models/home-time";
import {HomeTimeService} from "../../services/home-time.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-home-time',
  templateUrl: './home-time.component.html',
  styleUrls: ['./home-time.component.css']
})
export class HomeTimeComponent implements OnInit {
// @ts-ignore
  homeTimes: HomeTime[];
  currentUser = localStorage.getItem("currentUser");

  constructor(private homeTimeService: HomeTimeService, private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.homeTimeService.searchByHome(4).subscribe(res => {
        this.homeTimes = res;
      }
    )
  }

  orderHo() {
    // @ts-ignore
    let a: Date = +document.getElementById("monthStart").value;
    // @ts-ignore
    let b: Date = +document.getElementById("monthEnd").value;
    this.homeTimeService.orderHome(a, b, this.homeTimes)
  }
}
