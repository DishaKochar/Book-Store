import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../auth';
import {FormGroup,FormBuilder,FormControl,Validators,RequiredValidator} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm ={
    email: '',
    password:''
  };
  // constructor(private formBuilder: FormBuilder,
  //   private router: Router){ localStorage.clear();}
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  submit(){
    localStorage.setItem('user1',JSON.stringify(this.form))
    this.router.navigateByUrl('cart')
  }

}
