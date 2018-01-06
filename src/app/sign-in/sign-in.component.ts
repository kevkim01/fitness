import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  loginEmail(){
    const inputValue = this.form.value;
    this.authService.emailLogin(inputValue.email, inputValue.password);
    if(this.authService.authenticated()){
      this.router.navigate(['account']);
    }
  }

}
