import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Post } from './shared/model/post.model';
import { PostService } from './shared/service/post.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  //moduleId: module.id,
  selector: 'app-post-details',
  templateUrl: 'post-details.component.html',
  styleUrls: ['post-details.component.css']
})
export class PostDetailsComponent implements OnInit , OnDestroy{

  post:Post;
  private sub:Subscription;

  constructor(public route:ActivatedRoute, public postService:PostService) {}

  ngOnInit() {
   this.sub= this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.postService
          .getPost(id)
          .subscribe(res => this.post = res.json());
      });

  //this.post= this.postService.getPost(this.route.snapshot.params['id']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
