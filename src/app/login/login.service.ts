import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../helpers/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

   getUsers(username: string, password: string): Observable<Users[]> {
    return  this.http.get<Users[]>(environment.apiUrl + `Users?username=${username}&password=${password}`);
  }
}
