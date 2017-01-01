import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Comment } from '../core/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup;
  content: FormControl;

  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.content = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.commentForm = fb.group({
      content: this.content
    });
  }

  ngOnInit() {

  }

  saveCommentForm() {
    console.log('submitting comment form @'+ this.commentForm.value);
    this.saved
      // .subscribe((res) => {
      //   this.commentForm.setValue({ content: '' });
      //   this.commentForm.markAsPristine();
      // })
      .emit(this.commentForm.value);

    this.commentForm.controls['content'].setValue('');
    this.commentForm.markAsPristine();
  }

}
