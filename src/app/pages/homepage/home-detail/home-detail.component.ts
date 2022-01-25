import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../services/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Home} from 'src/app/models/home';
import {Image} from 'src/app/models/image';
import {Comment} from 'src/app/models/comment';
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  home?: Home;
  images?: Image[] = [];
  fiveHome?: Home[] = [];
  comments?: Comment[] = []

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService,
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

      this.homeService.getListImg(id).subscribe(result => {
        for (let i = 0; i < result.length; i++) {
          if (i >= 1) {
            // @ts-ignore
            this.images.push(result[i])
            console.log(this.images)
          }
        }
      })

      this.commentService.getAllByHome(id).subscribe(cmts => {
        this.comments = cmts
      })
    })

    this.homeService.show5Home().subscribe(list => {
      this.fiveHome = list
    })



  }

}
