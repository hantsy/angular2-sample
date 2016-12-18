import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';

import { ShowAuthedDirective } from './show-authed.directive';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    RouterModule,
    MdlModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    //BrowserModule,
    MdlModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
