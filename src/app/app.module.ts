import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { APP_CONFIG, DEFAULT_APP_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

import { Observable } from 'rxjs/Observable';
import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
  MissingTranslationHandlerParams
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return '[' + params.key + ']';
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    Ng2BootstrapModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  exports: [],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: DEFAULT_APP_CONFIG
    },
    {
      provide: MissingTranslationHandler,
      useClass: MyMissingTranslationHandler
    }
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
