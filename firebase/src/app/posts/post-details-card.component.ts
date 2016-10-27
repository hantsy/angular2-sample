import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';

import { Post } from '../core/post.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-details-card',
  templateUrl: './post-details-card.component.html',
  styleUrls: ['./post-details-card.component.css']
})
export class PostDetailsCardComponent implements OnInit {

  @Input() post: Post={ title:'', content:''} ;

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {

  //   if (changes && changes['post'] && changes['post'].currentValue) {
  //     this.post = Object.assign({}, changes['post'].currentValue);
  //   }
  //   // for (let propName in changes) {
  //   //   let chng = changes[propName];
  //   //   let cur = JSON.stringify(chng.currentValue);
  //   //   let prev = JSON.stringify(chng.previousValue);

  //   //   console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  //   // }
  // }

}
