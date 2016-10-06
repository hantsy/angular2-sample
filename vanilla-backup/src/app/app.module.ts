import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//post module
import { PostModule } from './post/post.module';

//app routings
import { appRouting, appRoutingProviders } from './app.routing';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // JsonpModule,
    // app routing, and custom modules in this project
    appRouting,
    PostModule
  ],
  providers: [...appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}
