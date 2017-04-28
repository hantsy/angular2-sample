import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post = { title: '', content: '' };
  sub: Subscription;
  id: number;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  onPostUpdated(event) {
    console.log('post was updated!' + event);
    if (event) {
      this.router.navigate(['', 'posts']);
    }
  }

  ngOnInit() {
    this.sub = this.route.params
      .flatMap(params => {
        this.id = +params['id'];
        return this.postService.getPost(this.id);
      })
      .subscribe((res: Post) => this.post = res);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
