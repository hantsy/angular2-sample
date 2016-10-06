import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { PostService } from './post.service';
import { JWT } from './jwt';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    HttpModule,
    RouterModule
  ],
  providers: [
    ApiService,
    AuthService,
    PostService,
    JWT,
    AuthGuard
  ]
})
export class CoreModule { }
