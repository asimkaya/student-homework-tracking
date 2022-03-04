import { Injectable } from '@angular/core';
import { LoginUser } from '../helpers/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  sharedUser: LoginUser = {
    username: '',
    usertype: '',
    firstName: '',
    lastName: ''
  }

  constructor() { }
}
