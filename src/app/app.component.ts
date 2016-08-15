import { Component } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {provideRouter, ROUTER_DIRECTIVES} from '@angular/router';
import { HeaderComponent, FooterComponent} from './layout/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_CARD_DIRECTIVES
  ],
  providers: []
})
export class AppComponent {
  title = 'app works!';
}
