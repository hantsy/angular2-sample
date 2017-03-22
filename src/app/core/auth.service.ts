import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject, ReplaySubject } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { JWT } from './jwt';
import { User } from './user.model';

interface State {
  current: User;
  desiredUrl: string;
}

const defaultState: State = {
  current: null,
  desiredUrl: null
};

const store$ = new BehaviorSubject<State>(defaultState);

class AuthStore {
  _store = store$;
  changes = this._store.distinctUntilChanged();

  setState(state: State) {
    this._store.next(Object.assign({}, this.getState(), state));
  }

  getState() {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }

}

@Injectable()
export class AuthService {

  private currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private authenticated$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private desiredUrl: string = null;

  constructor(
    private api: ApiService,
    private jwt: JWT,
    private router: Router) {
  }

  attempAuth(type: string, credentials: any) {
    const path = (type === 'signin') ? '/login' : '/signup';
    const url = '/auth' + path;

    this.api.post(url, credentials)
      .map(res => res.json())
      .subscribe(res => {
        this.jwt.save(res.id_token);
        // set Authorization header
        this.setJwtHeader(res.id_token);

        this.setState(res.user);

        if (this.desiredUrl && !this.desiredUrl.startsWith('/signin')) {
          const _targetUrl = this.desiredUrl;
          this.desiredUrl = null;
          this.router.navigateByUrl(_targetUrl);
        } else {
          this.router.navigate(['']);
        }
      });
  }


  verifyAuth(): void {

    // jwt token is not found in local storage.
    if (this.jwt.get()) {

      // set jwt header and try to refresh user info.
      this.setJwtHeader(this.jwt.get());

      this.api.get('/me').subscribe(
        res => {
          this.currentUser$.next(res);
          this.authenticated$.next(true);
        },
        err => {
          this.clearJwtHeader();
          this.jwt.destroy();
          this.currentUser$.next(null);
          this.authenticated$.next(false);
        }
      );
    } else {
      this.clearJwtHeader();
      this.jwt.destroy();
      this.currentUser$.next(null);
      this.authenticated$.next(false);
    }
  }

  logout() {
    // reset the initial values
    this.setState(null);
    //this.desiredUrl = null;

    this.jwt.destroy();
    this.clearJwtHeader();
    this.desiredUrl = null;

    this.router.navigate(['']);
  }

  currentUser(): Observable<User> {
    return this.currentUser$.distinctUntilChanged();
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticated$.asObservable();
  }

  getDesiredUrl() {
    return this.desiredUrl;
  }

  setDesiredUrl(url: string) {
    this.desiredUrl = url;
  }

  private setState(state: User) {
    if (state) {
      this.currentUser$.next(state);
      this.authenticated$.next(true);
    } else {
      this.currentUser$.next(null);
      this.authenticated$.next(false);
    }
  }

  private setJwtHeader(jwt: string) {
    this.api.setHeaders({ Authorization: `Bearer ${jwt}` });
  }

  private clearJwtHeader() {
    this.api.deleteHeader('Authorization');
  }
}
