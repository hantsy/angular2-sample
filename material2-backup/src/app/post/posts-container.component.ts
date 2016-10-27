import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './shared/services/post.service';
import { PostCardComponent } from './shared/components/post-card.component';
import { Post } from './shared/models/post.model';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-posts-container',
  templateUrl: 'posts-container.component.html',
  styleUrls: ['posts-container.component.css'],
  directives: [PostCardComponent]
})
export class PostsContainerComponent implements OnInit, OnDestroy {

  posts: Array<Post>;
  private sub: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.sub = this.postService.getPosts()
      .subscribe(data => this.posts = data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onShowDetails(post: Post){
    this.router.navigate(['/posts/details', post.id]);
  }

}
