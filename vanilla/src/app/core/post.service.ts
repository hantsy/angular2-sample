import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Post } from './post.model';
import { Comment } from './comment.model';

@Injectable()
export class PostService {

  private path: string = '/posts';

  constructor(private api: ApiService) { }

  getPosts() {
    return this.api.get(`${this.path}`);
  }

  getPost(id: number) {
    return this.api.get(`${this.path}/${id}`);
  }

  savePost(data: Post) {
    return this.api.post(`${this.path}`, data);
  }

  updatePost(id: number, data: Post) {
    return this.api.put(`${this.path}/${id}`, data);
  }

  deletePost(id: number) {
    return this.api.delete(`${this.path}/${id}`);
  }

  saveComment(id: number, data: Comment) {
    return this.api.post(`${this.path}/${id}/comments`, data);
  }

  getCommentsOfPost(id: number) {
    return this.api.get(`${this.path}/${id}/comments`);
  }

}
