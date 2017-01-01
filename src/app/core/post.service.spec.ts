/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';

import { ApiService } from './api.service';
import { PostService } from './post.service';

const posts = [
  {
    id: 1,
    title: 'Getting started with REST',
    content: 'Content of Getting started with REST',
    createdAt: '9/22/16 4:15 PM'
  },
  {
    id: 2,
    title: 'Getting started with AngularJS 1.x',
    content: 'Content of Getting started with AngularJS 1.x',
    createdAt: '9/22/16 4:15 PM'
  },
  {
    id: 3,
    title: 'Getting started with Angular2',
    content: 'Content of Getting started with Angular2',
    createdAt: '9/22/16 4:15 PM'
  },
];

class ApiServiceStub {
  get(path) {
    return Observable.of(posts);
  }
}

describe('Service: Post', () => {
  let apiService: ApiService;
  let postService: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{ provide: ApiService, useValue: new ApiServiceStub() }, PostService]
    });
  });

  beforeEach(inject([ApiService, PostService], (_apiService, _postService) => {
    apiService = _apiService;
    postService = _postService;
  }));

  it('should not be null...', () => {
    expect(postService).toBeTruthy();
  });

  it('should get posts...', async(() => {
    postService.getPosts()
      .subscribe(res => {
        expect(res).toEqual(posts);
      });
  }));

});
