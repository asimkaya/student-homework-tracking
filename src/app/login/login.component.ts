import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  errorText: boolean = false;
  loading: boolean = false;

  constructor(private service: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorText = false;
    this.loading = true;
    this.service.SignIn(this.loginForm.value.username, this.loginForm.value.password).then((x) => {
      if(!x) {
        this.errorText = true;
        this.loading = false;
        localStorage.setItem('login','false');
      }
    })
  }

}
