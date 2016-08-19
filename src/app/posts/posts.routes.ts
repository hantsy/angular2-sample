import { PostsComponent, NewPostComponent, PostDetailsComponent, EditPostComponent } from './index';
import {RouterConfig, RouterModule} from '@angular/router';

export const postsRoutes: RouterConfig = [
  { path: 'posts/home', component: PostsComponent },
  { path: 'posts/details/:id', component: PostDetailsComponent },
  { path: 'posts/edit/:id', component: EditPostComponent },
  { path: 'posts/new', component: NewPostComponent },
];


//export const postsRouting = RouterModule.forChild(postsRoutes);
