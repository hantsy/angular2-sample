import {PostsComponent, PostDetailsComponent, NewPostComponent, EditPostComponent} from './index';
import {postsRouting, postsRoutingProviders} from './posts.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,FormsModule, postsRouting],
  declarations: [PostsComponent, PostDetailsComponent, NewPostComponent, EditPostComponent],
  providers: [...postsRoutingProviders]
})
export class PostsModule{}
