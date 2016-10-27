import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../core/post.service';
import { Post } from '../core/post.model';

import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  data: Post = { title: '', content: '' };
  id: string;
  posts$: FirebaseListObservable<Post[]>

  constructor(private af: AngularFire, private router: Router, private route: ActivatedRoute) {

    this.posts$ = this.af.database.list('/posts');
  }

  save() {
    this.posts$.update(
      this.id,
      {
        title: this.data.title,
        content: this.data.content,
        updatedAt: firebase.database['ServerValue']['TIMESTAMP']
      })
      .then(
      (ret) => {
        console.log('saved');
        this.router.navigate(['', 'posts']);
      },
      (err) => {
        console.log('error on saving:' + JSON.stringify(err));
      });
  }

  ngOnInit() {
    console.log('call EditPostComponent ngOnInit:');
    this.route.params
      .map(params => params['id'])
      .subscribe(
      (id) => {
        console.log('post params id:%s' + id);
        this.id = id;
        this.af.database.list('/posts', {
          query: {
            orderByKey: true,
            equalTo: id
          }
        }).subscribe(
          (ret) => {
            console.log('ret:' + JSON.stringify(ret));
            this.data = ret[0];
          },
          (err) => {
            console.log('err :' + JSON.stringify(err));
          });
      });
  }

  ngOnDestroy() {
  }
}
