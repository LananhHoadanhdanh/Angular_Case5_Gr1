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
    this.homeService.showListHome().subscribe(res => {
      this.homes = res
      // console.log(res)
      for (let i = 0; i < res.length; i++) {
        this.homeService.getListImg(res[i].id).subscribe(result => {
          console.log(result)
          this.images?.push(result[0])
          console.log(this.images)
        })
      }
    })
  }

  logout(){
    this.authenticationService.logout()
  }

}
