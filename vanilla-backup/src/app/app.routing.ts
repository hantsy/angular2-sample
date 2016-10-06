import { Routes, RouterModule } from '@angular/router';
// import { postsRoutes } from './posts/posts.routes';
// import { profileRoutes } from './profile/profile.routes';
import { loginRoutes } from './login/login.routes';
import { signupRoutes } from './signup/signup.routes';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthService, ApiService, AuthGuard } from './shared/';

export const appRoutes: Routes = [
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
  ...loginRoutes,
  ...signupRoutes,
  { path: '', pathMatch: 'full', redirectTo: '/posts/home' },
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const appRoutingProviders = [AuthService, AuthGuard, ApiService];
