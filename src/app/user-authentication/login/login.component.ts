import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor( private formBuilder: FormBuilder, private routes: Router) {
    
   }
createForm(){
   this.login = this.formBuilder.group({
    username: ['admin@webdunia.com', Validators.required],
    password: ['admin123', Validators.required]
  })
}

   getError(el) {
    switch (el) {
      case 'user':
        if (this.login.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.login.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }
  
  ngOnInit() {
    this.createForm();
  }

  onSubmit(){
    console.log("username", this.login.value.username, ",  password", this.login.value.password)
    if(this.login.value.username === "admin@webdunia.com"){
      if(this.login.value.password === "admin123"){
        this.routes.navigate(['poll-form']);
      }
    }
  }

}
