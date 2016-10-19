import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private authService : AuthService) {}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
    console.log('route.log' + route.url);
    console.log('state' + state.url);

    this
      .authService
      .ensureAuthIs(true)
      .subscribe((auth) => {
        if (!auth) {
          this.authService.desiredUrl = state.url;
          console.log('desiredUrl@' + state.url);
          this
            .router
            .navigate(['', 'signin']);
        }
      });
    return true;
  }
}
