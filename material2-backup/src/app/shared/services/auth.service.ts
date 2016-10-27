import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Observable} from 'rxjs/Observable';
import {CanActivate, Router} from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  private JWT_KEY: string = 'id_token';
  redirectUrl: string;

  constructor(private api: ApiService) {
    const token = window.localStorage.getItem(this.JWT_KEY);
    if (token) {
      this.setJwt(token);
    }
  }

  setJwt(jwt: string) {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    this.api.setHeaders({ Authorization: `Bearer ${jwt}` });
  }

  isAuthenticated(): boolean {
    return Boolean(window.localStorage.getItem(this.JWT_KEY));
  }

  login(credentials: Object) {
    return this.api.post('/auth/login', credentials)
      .subscribe(
      data => {
        this.setJwt(data.token);
      }
      );
  }

  signup(userForm: Object) {
    return this.api.post('/auth/signup', userForm)
      .subscribe(
      (data) => console.log('signup result:' + data)
      );
  }

  logout() {
    return this.api.post('/auth/logout', {})
      .subscribe(
      (data) => {
        console.log('logout result:' + data);
        window.localStorage.removeItem(this.JWT_KEY);
        this.redirectUrl = null;
      }
      );
  }
}
