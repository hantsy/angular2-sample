import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShowAuthedDirective } from './show-authed.directive';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent
    ],
  exports: [
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
