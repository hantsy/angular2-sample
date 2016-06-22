import { PostsComponent, NewPostComponent, PostDetailsComponent, EditPostComponent } from './posts/';
import { ProfileComponent } from './profile/';

export const AppRoutes = [
      { path: '', component: PostsComponent },
      { path: 'posts/:id/details', component: PostDetailsComponent },
      { path: 'posts/:id/edit', component: EditPostComponent },
      { path: 'posts/new', component: NewPostComponent },
      { path: 'profile', component: ProfileComponent }
];