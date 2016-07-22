import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {LoginForm} from '../model/login-form.model';
import {SignupForm} from '../model/signup-form.model';

@Injectable()
export class AuthService {
  private AUTH_URL: string = '/api/auth';

  loggedIn: boolean = false;
  token: string;

  constructor(private http: Http) { }

  login(credentials: LoginForm) {

    return this.http.post(this.AUTH_URL + '/login', JSON.stringify(credentials))
      .subscribe(
      (res: Response) => {
        var resJson = res.json();
        console.log('response json@' + JSON.stringify(resJson));
        this.token = resJson.token;
        this.loggedIn = true;
      },
      (error) => {
        console.log(error);
        this.token = null;
        this.loggedIn = false;
      }
      );
  }

  signup(userForm: SignupForm) {
    return this.http.post(this.AUTH_URL + '/signup', JSON.stringify(userForm))
      .subscribe(
      (res: Response) => {
        console.log('signup successfully!');
        //this.login({ username: userForm.username, password: userForm.password });
      },
      (error) => {
        console.log('signup failed.');
      }
      );

  }

  logout() {
    return this.http.post(this.AUTH_URL + '/logout', JSON.stringify({}))
      .subscribe(
      (res: Response) => {
        var resJson = res.json();
        console.log('response json@' + JSON.stringify(resJson));
        this.token = null;
        this.loggedIn = false;
      },
      (error) => {
        console.log(error);
      }
      );

  }

}
