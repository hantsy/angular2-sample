import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Post} from './shared/model/post.model';
import {PostService} from './shared/service/post.service';
import {Subscription} from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PostService]
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Post[];
  sub: Subscription;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.sub= this.postService.getPosts().subscribe(
      (data) => this.posts = data.json(),
      (err) => console.log(err),
      () => console.log('done')
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
