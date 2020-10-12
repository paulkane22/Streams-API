import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'http://localhost:56563/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  currentUserName = '';



  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) 
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  getUserName(): string {
    // this.currentUser$.subscribe(user => {
    // this.currentUserName = user.username;
    // });

    return this.currentUserName;
  }

  setCurrentUser(user: User)
  {
    this.currentUserSource.next(user);
    this.currentUserName = user.username;
  }

  logout() {
    console.log('Log out');
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.currentUserName = '';
  }
}
