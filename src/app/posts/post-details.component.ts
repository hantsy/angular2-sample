import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {Post} from '../model/post.model';
import {PostService} from '../service/post.service';

@Component({
  moduleId: module.id,
  selector: 'app-post-details',
  templateUrl: 'post-details.component.html',
  styleUrls: ['post-details.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[PostService]
})
export class PostDetailsComponent implements OnInit {

  post:Post;

  constructor(public route:ActivatedRoute, public postService:PostService) {}

  ngOnInit() {
  //  this.route.params
  //     .map(params => params['id'])
  //     .subscribe((id) => {
  //       this.postService
  //         .getPost(id)
  //         .subscribe(post => this.post = post);
  //     });

  this.post= this.postService.getPost(this.route.snapshot.params['id']);
  }

}
