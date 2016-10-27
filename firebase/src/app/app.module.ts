import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { APP_CONFIG, DEFAULT_APP_CONFIG} from './app.config';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule} from './about/about.module';

const firebaseConfig={
      apiKey: 'AIzaSyDZnJROK5LvI1S6G2GRfa4xmvGPvDtdyKM',
      authDomain: 'ng2-firebase-1194b.firebaseapp.com',
      databaseURL: 'https://ng2-firebase-1194b.firebaseio.com',
      storageBucket: 'ng2-firebase-1194b.appspot.com',
      messagingSenderId: '702226924584'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //3rd party modules
    Ng2BootstrapModule,

    AngularFireModule.initializeApp(
      firebaseConfig,
      {
        method: AuthMethods.Popup,
        //method: AuthMethods.Redirect
      }
    ),

    //app modules
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
