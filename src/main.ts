import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {AppRoutes} from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(AppRoutes),
  disableDeprecatedForms(),
  provideForms(),
]);

