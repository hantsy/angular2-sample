import { NgModule, Optional, SkipSelf } from '@angular/core';
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
export class CoreModule {

 //Prevent reimport of the CoreModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
