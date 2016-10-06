import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../core/post.model';
import { PostService } from '../core/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  sub: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.sub = this.postService.getPosts().subscribe(
      res => this.posts = res
    );
    // this.posts = [
    //   {
    //     id: 1,
    //     title: 'Getting started with REST',
    //     content: 'Content of Getting started with REST',
    //     createdAt: '9/22/16 4:15 PM'
    //   },
    //   {
    //     id: 2,
    //     title: 'Getting started with AngularJS 1.x',
    //     content: 'Content of Getting started with AngularJS 1.x',
    //     createdAt: '9/22/16 4:15 PM'
    //   },
    //   {
    //     id: 3,
    //     title: 'Getting started with Angular2',
    //     content: 'Content of Getting started with Angular2',
    //     createdAt: '9/22/16 4:15 PM'
    //   },
    // ];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
