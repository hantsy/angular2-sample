import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', loadChildren: 'app/signin/signin.module#SigninModule' },
  { path: 'signup', loadChildren: 'app/signup/signup.module#SignupModule' },
  { path: 'posts', loadChildren: 'app/posts/posts.module#PostsModule' },
 // { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
