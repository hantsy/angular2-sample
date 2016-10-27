import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Comment } from '../core/comment.model';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: FirebaseListObservable<Comment[]>;

  constructor() { }

  ngOnInit() {
  }

}
