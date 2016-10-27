import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-search-bar',
  templateUrl: './post-search-bar.component.html',
  styleUrls: ['./post-search-bar.component.css']
})
export class PostSearchBarComponent implements OnInit {
  q: boolean = false;

  @Output() toggleFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.toggleFilter.emit(false);
  }

  onToggleFilter(){
    this.q = !this.q;
    this.toggleFilter.emit(this.q);
  }

}
