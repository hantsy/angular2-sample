import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

//import { CoreModule } from '../core/core.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NewPostComponent } from './new-post.component';
import { EditPostComponent } from './edit-post.component';
import { PostDetailsComponent } from './post-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   // CoreModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent
  ]
})
export class PostsModule { }
