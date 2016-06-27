import { Injectable } from '@angular/core';
import {Post} from '../model/post.model';
import {PostForm} from '../model/post-form.model';

@Injectable()
export class PostService {
  nextId: number = 100;
  posts: Post[] = [
    { id: 1, title: 'Fist Post ', content: 'Content of First Post' },
    { id: 2, title: 'Second Post ', content: 'Content of Second Post' },
    { id: 3, title: 'Third Post ', content: 'Content of Third Post' }
  ];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post {
    return this.posts.find(post => post.id === id);
  }

  save(data: PostForm) {
    this.posts.push({ id: this.nextId++, title: data.title, content: data.content });
  }

  update(id: number, data: PostForm) {
    this.posts
      .filter((post) => post.id === id)
      .map(p => { p.title = data.title; p.content = data.content; });
  }
}
