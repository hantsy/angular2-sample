/* tslint:disable:no-unused-variable */
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {
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

import { PostService } from './post.service';

import {Post} from '../model/post.model';

const posts = [
  { id: 1, title: 'Fist Post', content: 'Content of First Post' },
  { id: 2, title: 'Second Post', content: 'Content of Second Post' },
  { id: 3, title: 'Third Post', content: 'Content of Third Post' }
];

console.log(JSON.stringify(posts));

/* import {Http, BaseRequestOptions, Response} from '@angular/http';
    * import {MockBackend} from '@angular/http/testing';
    * import {Injector, provide} from '@angular/core';
    *
    * it('should get a response', () => {
    *   var connection; //this will be set when a new connection is emitted from the backend.
    *   var text; //this will be set from mock response
    *   var injector = Injector.resolveAndCreate([
    *     MockBackend,
    *     {provide: Http, useFactory: (backend, options) => {
    *       return new Http(backend, options);
    *     }, deps: [MockBackend, BaseRequestOptions]}]);
    *   var backend = injector.get(MockBackend);
    *   var http = injector.get(Http);
    *   backend.connections.subscribe(c => connection = c);
    *   http.request('something.json').subscribe(res => {
    *     text = res.text();
    *   });
    *   connection.mockRespond(new Response({body: 'Something'}));
    *   expect(text).toBe('Something');
    * });
*/

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('Post Service:', () => {

  // //run before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        PostService,
        provide(Http, {
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        })
      ]
    });
  });

  it('get all posts',
    inject([PostService, MockBackend], fakeAsync((postService, mockBackend) => {
      let res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/posts/');
        let response = new ResponseOptions({ body: JSON.stringify(posts) });
        c.mockRespond(new Response(response));
      });
      postService.getPosts().subscribe((response) => {
        res = response.json();
      });
      tick(1000);

      expect(res[0].title).toBe('Fist Post');
      expect(res[0].content).toBe('Content of First Post');
    }))
  );


  it('get post by id',
    inject([PostService, MockBackend], fakeAsync((postService, mockBackend) => {
      let res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/posts/1');
        let response = new ResponseOptions({ body: JSON.stringify(posts[0]) });
        c.mockRespond(new Response(response));
      });
      postService.getPost(1).subscribe((response) => {
        res = response.json();
      });
      tick(1000);

      expect(res.title).toBe('Fist Post');
      expect(res.content).toBe('Content of First Post');
    }))
  );

  // it('get post by id not found shoud return 404',
  //   inject([PostService, MockBackend], fakeAsync((postService, mockBackend) => {
  //     var res;
  //     var err;
  //     mockBackend.connections.subscribe(c => {
  //       expect(c.request.url).toBe('/api/posts/1');
  //       let response = new ResponseOptions({ status: 404 });
  //       c.mockRespond(new Response(response));
  //     });
  //     postService.getPost(1).subscribe(
  //       (response) => {
  //         res = response;
  //       },
  //       (error) => {
  //         err = error;
  //       }
  //     );
  //     tick(1000);
  //     console.log(err);
  //     expect(err.status).toBe(404);
  //   }))
  // );


  it('save post',
    inject([PostService, MockBackend], fakeAsync((postService, mockBackend) => {
      let res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/posts/');
        let headers = new Headers();
        headers.append('Location', '/api/posts/1');
        let response = new ResponseOptions({ status: 201, headers: this.headers });
        c.mockRespond(new Response(response));
      });
      postService.save({ title: 'test title', content: 'test content' }).subscribe((response) => {
        res = response;
      });
      tick(1000);

      expect(res.status).toBe(201);
    }))
  );

  it('update post',
    inject([PostService, MockBackend], fakeAsync((postService, mockBackend) => {
      let res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/posts/1');
        let response = new ResponseOptions({ status: 204 });
        c.mockRespond(new Response(response));
      });
      postService.update(1, { title: 'test title', content: 'test content' }).subscribe((response) => {
        res = response;
      });
      tick(1000);

      expect(res.status).toBe(204);
    }))
  );

  it('delete post by id',
    inject([PostService, MockBackend], fakeAsync((postService, mockBackend) => {
      let res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/posts/1');
        let response = new ResponseOptions({ status: 204 });
        c.mockRespond(new Response(response));
      });
      postService.delete(1).subscribe((response) => {
        res = response;
      });
      tick(1000);

      expect(res.status).toBe(204);
    }))
  );

});
