import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../core/post.model';
import { PostService } from '../core/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {
  data = { title: '', content: '' };
  sub: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  save() {
    console.log('saving post data!' + this.data);
    this.postService
      .savePost(this.data)
      .subscribe(res => {
        this.router.navigate(['', 'posts']);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

}
