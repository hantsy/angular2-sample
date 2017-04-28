import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth.guard';

import { PostsHomeComponent } from './home.component';
import { NewPostComponent } from './new-post.component';
import { EditPostComponent } from './edit-post.component';
import { PostDetailsComponent } from './post-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: PostsHomeComponent },
  { path: 'new', component: NewPostComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditPostComponent, canActivate: [AuthGuard] },
  { path: 'view/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostsRoutingModule { }
