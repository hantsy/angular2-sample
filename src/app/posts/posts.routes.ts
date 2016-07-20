import { PostsComponent, NewPostComponent, PostDetailsComponent, EditPostComponent } from './index';
import {RouterConfig} from '@angular/router';

export const postsRoutes: RouterConfig = [
      { path: '',  pathMatch: 'full', redirectTo: '/posts/home' },
      { path: 'posts/home', component: PostsComponent },
      { path: 'posts/details/:id', component: PostDetailsComponent },
      { path: 'posts/edit/:id', component: EditPostComponent },
      { path: 'posts/new', component: NewPostComponent },
];
