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
    this.service.getUsers(this.loginForm.value.username, this.loginForm.value.password).subscribe(x => {
      this.loading = false;
      if (x.length == 0) {
        this.errorText = true;
        localStorage.setItem('login', 'false');
      } else {
        console.log(x);
        localStorage.setItem('login', 'true');
        this.userService.sharedUser.username = x[0].username;
        this.userService.sharedUser.usertype = x[0].userType;
        this.userService.sharedUser.firstName = x[0].firstName;
        this.userService.sharedUser.lastName = x[0].lastName;
        console.log(this.userService.sharedUser);
        this.router.navigate(['home']);
      }
    })
  }

}
