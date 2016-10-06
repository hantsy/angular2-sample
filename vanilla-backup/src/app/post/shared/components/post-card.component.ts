import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: 'post-card.component.html',
  styleUrls: ['post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post = {};
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked(){
    this.clicked.next(this.post);
  }

}
