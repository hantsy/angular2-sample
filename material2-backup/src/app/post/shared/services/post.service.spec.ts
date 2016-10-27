/* tslint:disable:no-unused-variable */

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {
  addProviders,
  async,
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { provide } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Headers
} from '@angular/http';

import { ApiService } from '../../../shared/services/api.service';
import { PostService } from './post.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Rx';

let posts = [
  { id: 1, title: 'Fist Post', content: 'Content of First Post' },
  { id: 2, title: 'Second Post', content: 'Content of Second Post' },
  { id: 3, title: 'Third Post', content: 'Content of Third Post' }
];

class MockApiService {

  get(path: string): Observable<any> {
    return Observable.from(posts);
  }

  post(path: string, data: any): Observable<any> {
    data.id = 100;
    posts.push(data);
    return Observable.empty();
  }

  put(path: string, data: any): Observable<any> {
    posts.forEach(p => {
      if (p.id === 1) {
        p.title = data.title;
        p.content = data.conent;
      }
    });
    return Observable.empty();
  }

  delete(path:string){
    posts.splice(0, 1);
    return Observable.empty();
  }
}


describe('Service: Post', () => {
  beforeEach(() => {
    addProviders(
      [
        provide(ApiService, {useClass: MockApiService}),
        BaseRequestOptions,
        MockBackend,
        PostService,
        provide(Http, {
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        })
      ]
    );
  });

  it('should ...',
    inject([PostService],
      (service: PostService) => {

        expect(service).toBeTruthy();
      }
    )
  );
});
