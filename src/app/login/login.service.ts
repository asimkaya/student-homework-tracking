import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Users } from '../helpers/model';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user','null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.ngZone.run(() => {
        localStorage.setItem('login','true');
        this.router.navigate(['home']);
      });
      this.SetUserData(result.user);
    })
    .catch((error) => {
      return false;
    })
  }
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  getUsers(username: string, password: string): Observable<Users[]> {
    return this.http.get<Users[]>(environment.apiUrl + `Users?username=${username}&password=${password}`);
  }
}
