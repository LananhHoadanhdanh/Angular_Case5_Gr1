import {Component, OnInit} from '@angular/core';
import {Home} from "../../../models/home";
import {Image} from "../../../models/image";
import {HomeService} from "../../../services/home.service";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {
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
    this.loadAll()
  }

  loadAll() {
    this.homeService.showListHome().subscribe(data => {
      this.homes = data

      // @ts-ignore
      for (let i = 0; i < this.homes.length; i++) {
        // @ts-ignore
        this.homeService.getListImg(this.homes[i].id).subscribe(result => {
          console.log(result)
          this.images?.push(result[0])
          console.log(this.images)
        })
      }
    })
  }

  logout() {
    this.authenticationService.logout()
  }

  search() {
  }

}
