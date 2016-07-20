import { RouterConfig } from '@angular/router';
import { postsRoutes } from './posts/posts.routes';
import { profileRoutes } from './profile/profile.routes';
import { loginRoutes } from './login/login.routes';

export const appRoutes:RouterConfig = [
  ...postsRoutes,
  ...profileRoutes,
  ...loginRoutes
];
