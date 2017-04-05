import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { APP_CONFIG, DEFAULT_APP_CONFIG } from './app.config';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //app modules
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  exports: [],
  providers: [{ provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
