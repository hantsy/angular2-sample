import {ProfileComponent, UpdateProfileComponent, UpdatePasswordComponent} from './index';
import {profileRouting, profileRoutingProviders} from './profile.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, profileRouting],
  declarations: [ProfileComponent, UpdateProfileComponent, UpdatePasswordComponent],
  providers: [...profileRoutingProviders]
})
export class ProfileModule{}
