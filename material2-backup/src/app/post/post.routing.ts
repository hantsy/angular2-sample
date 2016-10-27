import { PostsContainerComponent } from './posts-container.component';
import { PostDetailsContainerComponent } from './post-details-container.component';
import { PostService } from './shared/services/post.service';
import { Routes, RouterModule } from '@angular/router';

export const postsRoutes: Routes = [
  { path: 'posts/home', component: PostsContainerComponent },
  { path: 'posts/details/:id', component: PostDetailsContainerComponent },
  // { path: 'posts/edit/:id', component: EditPostComponent },
  // { path: 'posts/new', component: NewPostComponent },
];


export const postsRouting = RouterModule.forChild(postsRoutes);
export const postsRoutingProviders = [PostService];
