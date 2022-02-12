import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  loading: boolean= false;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorText = false;
    this.loading = true;
    this.service.getUsers(this.loginForm.value.username, this.loginForm.value.password).subscribe(x => {
      this.loading = false;
      if(x.length == 0) {
        this.errorText = true;
      } else {
        console.log(x);
      }
    })
  }

}
