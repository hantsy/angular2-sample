import { NgModule } from '@angular/core';

import { AngularFireModule, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDZnJROK5LvI1S6G2GRfa4xmvGPvDtdyKM',
  authDomain: 'ng2-firebase-1194b.firebaseapp.com',
  databaseURL: 'https://ng2-firebase-1194b.firebaseio.com',
  storageBucket: 'ng2-firebase-1194b.appspot.com',
  messagingSenderId: '702226924584'
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(
      firebaseConfig,
      {
        method: AuthMethods.Popup,
        //method: AuthMethods.Redirect
      }
    )],
  exports: [
    AngularFireModule
  ]
})
export class AppFirebaseModule { }
