import { Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Post} from './shared/post.model';
import {PostService} from '../post.service';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[PostService]
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor( public postService:PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
