import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsHomeComponent } from './home.component';
import { NewPostComponent } from './new-post.component';
import { EditPostComponent } from './edit-post.component';
import { PostDetailsComponent } from './post-details.component';
import { PostDetailsCardComponent } from './post-card/post-details-card.component';
import { CommentListComponent } from './comment/comment-list.component';
import { CommentListItemComponent } from './comment/comment-list-item.component';
import { CommentFormComponent } from './comment/comment-form.component';
import { CommentPanelComponent } from './comment/comment-panel.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostService } from './post.service';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsHomeComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    PostDetailsCardComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentFormComponent,
    PostFormComponent,
    CommentPanelComponent
  ],
  exports: [
    PostDetailsCardComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentFormComponent,
    PostFormComponent,
    CommentPanelComponent
  ],
  providers: [
    PostService,
  ]
})
export class PostsModule { }
