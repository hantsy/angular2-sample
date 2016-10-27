import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { AuthService } from './auth.service';
import { PostService } from './post.service';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule
  ],
  providers: [
    AuthService,
    PostService,
    ProfileService,
    AuthGuard,
    UnauthGuard
  ]
})
export class CoreModule { }
