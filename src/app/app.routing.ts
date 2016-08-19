import { RouterConfig, RouterModule } from '@angular/router';
//import { postsRoutes } from './posts/posts.routes';
//import { profileRoutes } from './profile/profile.routes';
import { loginRoutes } from './login/login.routes';
import { signupRoutes } from './signup/signup.routes';

import {AuthService, PostService} from './shared/service/index';

export const appRoutes: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: '/posts/home' },
  //...postsRoutes,
  //...profileRoutes,
  ...loginRoutes,
  ...signupRoutes
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const appRoutingProviders = [ AuthService];
