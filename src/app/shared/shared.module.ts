import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { TranslateModule} from '@ngx-translate/core';
import { ShowAuthedDirective } from './show-authed.directive';

import { Nl2brPipe } from './nl2br.pipe';
import { EmailValidatorDirective } from './email-validator.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //3rd party modules
    Ng2BootstrapModule,
    TranslateModule
  ],
  declarations: [
    ShowAuthedDirective,
    Nl2brPipe,
    EmailValidatorDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2BootstrapModule,
    ShowAuthedDirective,
    Nl2brPipe,
    EmailValidatorDirective,
    TranslateModule
  ],
})
export class SharedModule { }
