import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/helpers/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userInformation!: LoginUser;
  constructor(private userService: UserService) {
    this.userInformation = this.userService.sharedUser
   }

  ngOnInit(): void {
  }

}
