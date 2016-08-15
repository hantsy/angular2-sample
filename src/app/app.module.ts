import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Material Design
import {MdButtonModule} from '@angular2-material/button';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdCardModule} from '@angular2-material/card';

//application route config
import {appRoutes} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MdButtonModule,
    MdSidenavModule,
    MdCardModule
  ]
})
export class AppModule { }

