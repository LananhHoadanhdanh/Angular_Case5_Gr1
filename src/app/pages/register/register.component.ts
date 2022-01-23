import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    status: new FormControl("1")
  });
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService : UserService) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
  }
  register(){
    const user = this.userForm.value;
    console.log(user)
    this.userService.register(user).subscribe(() => {
      alert("Tạo tài khoản thành công! Hãy đăng nhập !")
      this.router.navigate(["/"])
    },error => {
      console.log(error)
    })
  }
}
