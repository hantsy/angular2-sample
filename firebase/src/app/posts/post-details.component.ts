import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

import { Observable, Subscription } from 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { PostService, AuthService, Post, Comment } from '../core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  id: string;
  post: Observable<Post> = Observable.of({ title: '', content: '' });
  comments: FirebaseListObservable<Comment[]>;


  constructor(private af: AngularFire, private auth: AuthService,  private router: Router, private route: ActivatedRoute) { }

  saveComment(data: Comment) {
    console.log('calling saveComment...:' + data);
    let _data = Object.assign({}, data, { createdAt: firebase.database['ServerValue']['TIMESTAMP'], createdBy: this.auth.id });
    this.comments.push(_data);
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe(
      (id) => {
        this.id = id;
        this.comments = this.af.database.list('/comments/' + this.id);
        this.af.database.list('/posts', {
          query: {
            orderByKey: true,
            equalTo: id
          }
        }).subscribe(
          (ret) => {
            console.log('ret:' + JSON.stringify(ret));
            this.post = ret[0];
          },
          (err) => {
            console.log('err :' + JSON.stringify(err));
          });
        }
      );
  }

  ngOnDestroy() { }
}
