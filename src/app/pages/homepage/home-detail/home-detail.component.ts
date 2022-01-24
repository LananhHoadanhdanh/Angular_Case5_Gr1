import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../services/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Home } from 'src/app/models/home';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  home?: Home;

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.homeService.findById(id).subscribe(res => {
        console.log(res)
        this.home = res
      })
    })
  }

}
