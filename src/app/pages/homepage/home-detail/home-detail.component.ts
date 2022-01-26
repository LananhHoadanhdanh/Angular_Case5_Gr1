import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../services/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Home} from 'src/app/models/home';
import {Image} from 'src/app/models/image';
import {Comment} from 'src/app/models/comment';
import {CommentService} from "../../../services/comment.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";

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
  // @ts-ignore
  comment: Comment = {
    content: "",
    time: "",
  };
  idU = localStorage.getItem("USERID");
  idH!: string

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService,
              private router: Router, private form: FormBuilder) {
  }

  commentForm: FormGroup = this.form.group({
    content: new FormControl('', Validators.required),
    user: new FormControl(),
  })

  saveComment(): void {
    const com = this.commentForm.value;
    com.user = {id: this.idU};
    com.home = {id: this.idH}
    this.commentService.saveCom(com).subscribe(r=>{  this.commentService.getAllByHome(this.idH).subscribe(cmts => {
      this.comments = cmts
    })});
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.idH = param.get('id')
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
