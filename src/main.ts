import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRoutes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provideRouter(appRoutes),
  disableDeprecatedForms(),
  provideForms(),
]);

