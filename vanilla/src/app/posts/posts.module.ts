import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NewPostComponent } from './new-post.component';
import { EditPostComponent } from './edit-post.component';
import { PostDetailsComponent } from './post-details.component';
import { PostDetailsCardComponent } from './post-details-card.component';
import { CommentListComponent } from './comment-list.component';
import { CommentListItemComponent } from './comment-list-item.component';
import { CommentFormComponent } from './comment-form.component';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    PostDetailsCardComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentFormComponent
  ],
  exports: [
    PostDetailsCardComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentFormComponent
  ]
})
export class PostsModule { }
