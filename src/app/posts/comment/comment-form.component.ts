import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Comment } from '../comment.model';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() post: Post;
  @Output() onSaved = new EventEmitter();

  commentForm: FormGroup;
  content: FormControl;

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.content = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.commentForm = fb.group({
      content: this.content
    });
  }

  ngOnInit() {

  }

  saveCommentForm() {
    console.log('submitting comment form @' + this.commentForm.value);

    this.postService.saveComment(this.post.id, this.commentForm.value)
      .subscribe((data) => {
        this.commentForm.controls['content'].setValue('');
        this.commentForm.markAsPristine();
        this.commentForm.markAsUntouched();
        this.onSaved.emit(true);
      }, (error) => {
        this.onSaved.emit(false);
      });
  }

}
