import { Injectable } from '@angular/core';
import {Post} from '../model/post.model';
import {PostForm} from '../model/post-form.model';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostService {
  private POST_URL: string = '/api/posts/';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.POST_URL);
  }

  getPost(id: number){
    return this.http.get(this.POST_URL + id);
  }

  save(data: PostForm){
    return this.http.post(this.POST_URL, data);
  }

  update(id: number, data: PostForm){
    return this.http.put(this.POST_URL + id, data);
  }

  delete(id: number) {
    return this.http.delete(this.POST_URL + id);
  }
}
