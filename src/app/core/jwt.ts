import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';

const JWT_KEY: string = 'id_token';

@Injectable()
export class JWT {

  constructor(/*@Inject(APP_CONFIG) config: AppConfig*/) {
    //this.jwtKey = config.jwtKey;
  }

  save(token) {
    window.localStorage[JWT_KEY] = token;
  }

  get() {
    return window.localStorage[JWT_KEY];
  }

  destroy() {
    window.localStorage.removeItem(JWT_KEY);
  }

}
