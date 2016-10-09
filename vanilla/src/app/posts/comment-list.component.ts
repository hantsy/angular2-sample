import { Component, OnInit, Input } from '@angular/core';

import { Comment } from '../core/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: Array<Comment>;

  constructor() { }

  ngOnInit() {
  }

}
