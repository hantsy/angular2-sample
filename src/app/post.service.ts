import { Injectable } from '@angular/core';
import {Post} from './posts/shared/post.model';

@Injectable()
export class PostService {
  posts: Post[] = [
    { id: 1, title: 'Fist Post ', content: 'Content of First Post' },
    { id: 2, title: 'Second Post ', content: 'Content of Second Post' },
    { id: 3, title: 'Third Post ', content: 'Content of Third Post' }
  ];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number):Post {
    return this.posts.find(post => post.id == id);
  }

}
