import { Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Post} from '../model/post.model';
import {PostService} from '../service/post.service';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => this.posts = data,
      (err) => console.log(err),
      () => console.log('done')
    );
  }

}
