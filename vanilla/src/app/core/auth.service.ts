import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from './api.service';
import { JWT } from './jwt';
import { User } from './user.model';

@Injectable()
export class AuthService {

  current: User = null;

  constructor(private api: ApiService, private jwt: JWT, private router: Router) {
  }

  attempAuth(type: string, credentials: any) {
    let path = (type === 'signin') ? '/login' : '/signup';
    let url = '/auth' + path;

    return this.api.post(url, credentials)
      .subscribe(res => {
        this.jwt.save(res.id_token);
        this.current = res.user;

        // set Authorization header
        this.setJwt(res.id_token);
      });
  }

  ensureAuthIs(b: boolean): Observable<boolean> {

    const auth = new BehaviorSubject<boolean>(false);

    this.verifyAuth()
      .subscribe((authValid) => {
        // if it's the opposite, redirect signin page.
        if (authValid !== b) {
          this.router.navigate(['', 'auth', 'sigin']);
          auth.next(false);
        } else {
          auth.next(true);
        }
      });

    return auth.asObservable();
  }

  verifyAuth(): Observable<boolean> {
    const auth = new BehaviorSubject<boolean>(false);

    if (!this.jwt.get()) {
      auth.next(false);
    }

    if (this.current) {
      auth.next(true);
    } else {
      this.api.get('/me').subscribe(
        res => {
          this.current = res;
          auth.next(true);
        },
        err => {
          this.jwt.destroy();
          auth.next(false);
        }
      );
    }

    return auth.asObservable();
  }

  logout() {
    this.jwt.destroy();
    this.clearJwt();
  }

  private setJwt(jwt: string) {
    this.api.setHeaders({ Authorization: `Bearer ${jwt}` });
  }

  private clearJwt() {
    this.api.deleteHeader('Authorization');
  }
}
