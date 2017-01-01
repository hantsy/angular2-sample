import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { FormControl } from '@angular/forms';
import { Post } from '../core/post.model';
import { PostService } from '../core/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  q: string = '';
  posts: Post[];
  sub: Subscription;

  constructor(private postService: PostService, private translate: TranslateService) {

    console.log('posts of lang:' + this.translate.instant('posts'));
    console.log('posts nonexist of lang:' + this.translate.instant('posts-nonexist'));
    // this.sub = this.q.valueChanges
    //   .debounceTime(500)
    //   .distinctUntilChanged()
    //   .flatMap(term => this.postService.getPosts({ q: term }))
    //   .subscribe((res: Array<Post>) => this.posts = res);
  }


  //  <form class="form-inline" (ngSubmit)="search(term.value)">
  //           <div class="form-group">
  //             <input type="text" #term name="q" class="form-control"  />
  //           </div>
  //           <button type="submit" class="btn btn-outline-info">{{'search'}}</button>
  //         </form>
  // search(term: string) {
  //   this.sub = this.postService.getPosts({ q: term }).subscribe(
  //     res => this.posts = res
  //   );
  // }

  search() {
    this.sub = this.postService.getPosts({ q: this.q }).subscribe(
      res => this.posts = res
    );
  }

  // clearTerm() {
  //   this.q.setValue(null);
  // }

  ngOnInit() {
    this.search();
    // this.posts = [
    //   {
    //     id: 1,
    //     title: 'Getting started with REST',
    //     content: 'Content of Getting started with REST',
    //     createdAt: '9/22/16 4:15 PM'
    //   },
    //   {
    //     id: 2,
    //     title: 'Getting started with AngularJS 1.x',
    //     content: 'Content of Getting started with AngularJS 1.x',
    //     createdAt: '9/22/16 4:15 PM'
    //   },
    //   {
    //     id: 3,
    //     title: 'Getting started with Angular2',
    //     content: 'Content of Getting started with Angular2',
    //     createdAt: '9/22/16 4:15 PM'
    //   },
    // ];
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
