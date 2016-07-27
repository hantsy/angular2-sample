import { ProfileComponent } from './profile.component';
import { UpdatePasswordComponent } from './update-password.component';
import { UpdateProfileComponent } from './update-profile.component';

import {RouterConfig} from '@angular/router';

export const profileRoutes: RouterConfig = [
  {
    path: 'profile', component: ProfileComponent,
    children: [
      { path: 'update-password', component: UpdatePasswordComponent, },
      { path: 'update-profile', component: UpdateProfileComponent, },
      { path: '', component: ProfileComponent, }
    ]
  }
];
