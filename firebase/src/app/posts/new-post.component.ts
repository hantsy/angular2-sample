import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { PostService } from '../core/post.service';
import { Post } from '../core/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {
  data: Post = { title: '', content: ''} ;
  sub: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  save() {
    console.log('saving post data!' + JSON.stringify(this.data));
    this.postService.createPost(this.data.title, this.data.content)
    .then(
      (ret) => {
        console.log('saved:');
        this.router.navigate(['', 'posts']);
      },
      (err) => {
        console.log('error on saving:' + JSON.stringify(err));
      }
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

}
