import { Injectable, Inject} from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';

@Injectable()
export class JWT {

  jwtKey: string = 'id_token';

  constructor(/*@Inject(APP_CONFIG) config: AppConfig*/) {
    //this.jwtKey = config.jwtKey;
  }

  save(token) {
    window.localStorage[this.jwtKey] = token;
  }

  get() {
    return window.localStorage[this.jwtKey];
  }

  destroy() {
    window.localStorage.removeItem(this.jwtKey);
  }

}
