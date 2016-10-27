import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { Post, PostService } from '../core/';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  //posts: IPost[];

  constructor(private postService: PostService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // console.log('calling  ngOnInit():' + this.postService.visiblePosts);
    // this.postService.visiblePosts.subscribe(
    //   (ret) => {
    //     console.log('get result : ' + JSON.stringify(ret));
    //     this.posts
    //   }
    // );
  }

  ngOnDestroy() {

  }

}
