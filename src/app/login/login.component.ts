import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { CanActivate, Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { UsersService } from './../services/users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username="";
  public pass="";
  

  constructor(public loginService:LoginService, private router: Router, public usersService: UsersService) { }

  validateLogin(){

    this.loginService.postLogin(this.username,this.pass)
    .then((result) => {
      

      localStorage.setItem("token",result.json().token);
      this.usersService.getUser()
      this.router.navigateByUrl('/admin'); 
      console.log(localStorage.getItem("token"));
    })
  }

  ngOnInit() {
  }

}
