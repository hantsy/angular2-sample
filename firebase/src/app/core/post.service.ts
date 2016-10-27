import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from './auth.service';
import { Post } from './post.model';


@Injectable()
export class PostService {
  visiblePosts$: Observable<Post[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredPosts$: FirebaseListObservable<Post[]>;
  private posts$: FirebaseListObservable<Post[]>;


  constructor(private af: AngularFire, private auth: AuthService) {
    const path = '/posts';

    this.posts$ = this.af.database.list(path);

    this.filteredPosts$ = this.af.database.list(
      path,
      {
        query: {
          orderByChild: 'createdBy',
          equalTo: this.filter$
        }
      }
    );

    this.visiblePosts$ = this.filter$
      .switchMap(filter => filter != null ? this.filteredPosts$ : this.posts$);
  }

  get visiblePosts() {
    return this.visiblePosts$;
  }

  toggleFilter(filter: boolean): void {
    console.log('toggled filter value:' + filter);

    switch (filter) {
      case false:
        this.filter$.next(null);
        break;

      case true:
        this.filter$.next(this.auth.id);
        break;

      default:
        this.filter$.next(null);
        break;
    }
  }

  getPost(key: string) {
    return this.af.database.list('/posts',
      {
        query: {
          orderByKey: true,
          equalTo: key
        }
      }
    ).map(data => data && data.length > 0 ? data[0] : null);
  }

  createPost(title: string, content: string) {
    let _data: Post = { title: title, content: content };
    _data.createdBy = this.auth.id;
    return this.posts$.push(_data);
  }

  removePost(key: string): firebase.Promise<any> {
    return this.posts$.remove(key);
  }

  updatePost(key: string, changes: any): firebase.Promise<any> {
    return this.posts$.update(key, changes);
  }

  comments(postKey: string) {
    return this.af.database.list('/comments/' + postKey);
  }
}

