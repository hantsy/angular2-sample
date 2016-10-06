import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { NewPostComponent } from './new-post.component';
import { EditPostComponent } from './edit-post.component';
import { PostDetailsComponent } from './post-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: PostsComponent },
  { path: 'new', component: NewPostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'view/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostsRoutingModule { }
