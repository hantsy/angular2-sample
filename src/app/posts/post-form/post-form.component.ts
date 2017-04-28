import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {

  @Input() post: Post = { title: '', content: '' };
  @Output() onSaved: EventEmitter<any> = new EventEmitter<any>();
  sub: Subscription;

  constructor(private postService: PostService) { }

  save() {
    const _body = { title: this.post.title, content: this.post.content };

    if (this.post.id) {
      this.postService
        .updatePost(this.post.id, _body)
        .subscribe((data) => {
          this.onSaved.emit(true);
        },
        (error) => {
          this.onSaved.emit(false);
        }
        );
    } else {
      this.postService
        .savePost(_body)
        .subscribe((data) => {
          this.onSaved.emit(true);
        },
        (error) => {
          this.onSaved.emit(false);
        }
        );
    }

  }

  ngOnInit() {
    console.log('calling ngOnInit::PostFormComponent...');
  }

  ngOnDestroy() {
    console.log('calling ngOnDestroy::PostFormComponent...');
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
