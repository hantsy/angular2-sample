import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../core/';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts:Observable<Post[]>;

  constructor() { }

  ngOnInit() {
  }

}
