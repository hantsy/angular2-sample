import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
