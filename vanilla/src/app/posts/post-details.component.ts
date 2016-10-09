import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Observable, Subscription} from 'rxjs/Rx';
import { PostService } from '../core/post.service';
import { Post } from '../core/post.model';
import { Comment } from '../core/comment.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  id: number;
  post: Post = { title: '', content: '' };
  comments: Comment[] = [];
  sub: Subscription;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  saveComment(data: Comment) {
    console.log('calling saveComment...:' + data);
    this.postService.saveComment(this.id, data)
      .subscribe(res => this.comments.push(res.json()));
  }

  ngOnInit() {
    this.sub = this.route.params
      .flatMap(params => {
        this.id = +params['id'];
        return Observable.forkJoin(this.postService.getPost(this.id), this.postService.getCommentsOfPost(this.id));
      }).subscribe((res: Array<any>) => {
        this.post = res[0];
        this.comments = res[1];
        console.log("post data:" + this.post + ", comments: " + this.comments);
      });
  }

  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
