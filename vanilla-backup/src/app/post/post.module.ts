import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ui containers for routings
import { PostsContainerComponent } from './posts-container.component';
import { PostDetailsContainerComponent } from './post-details-container.component';

// ui components
import { PostCardComponent } from './shared/components/post-card.component';
import { CommentFormComponent } from './shared/components/comment-form.component';
import { CommentCardComponent } from './shared/components/comment-card.component';

// services
import { postsRouting, postsRoutingProviders } from './post.routing';

@NgModule({
  declarations: [
    PostCardComponent,
    CommentFormComponent,
    CommentCardComponent,
    PostsContainerComponent,
    PostDetailsContainerComponent
  ],
  exports: [
    PostCardComponent,
    CommentFormComponent,
    CommentCardComponent,
    PostsContainerComponent,
    PostDetailsContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    postsRouting
  ],
  providers: [...postsRoutingProviders],
})
export class PostModule {

}
