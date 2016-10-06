/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { APP_CONFIG, DEFAULT_APP_CONFIG} from '../app.config';
import { ApiService } from './api.service';

describe('Service: Api', () => {

  let apiService: ApiService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG },
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        ApiService
      ]
    });
  });

  beforeEach(inject([ApiService, MockBackend], (service, mock) => {
    apiService = service;
    mockBackend = mock;
  }));

  it('apiService should not be null...', () => {
    expect(apiService).toBeTruthy();
  });

  it('should make get request', async(() => {
    let connection;
    let response = [
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

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(
        new ResponseOptions({ body: JSON.stringify(response), status: 200 })
      ));
    });

    apiService.get('/posts')
      .subscribe(posts => {
        expect(posts).toEqual(response);
      });
  }));

  it('should make post request', async(() => {
    let connection;
    let requestBody = {
      title: 'Getting started with React',
      content: 'Content of Getting started with React'
    };
    let response = {};

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(
        new ResponseOptions({ body: JSON.stringify(response), status: 201 })
      ));
    });

    apiService.post('/posts', requestBody)
      .subscribe(post => {
        expect(post).toEqual(response);
      });
  }));


  it('should make put request', async(() => {
    let connection;
    let requestBody = {
      title: 'Getting started with React',
      content: 'Content of Getting started with React'
    };
    let response = {};

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(
        new ResponseOptions({ body: JSON.stringify(response), status: 204 })
      ));
    });

    apiService.put('/posts/1', requestBody)
      .subscribe(post => {
        expect(post).toEqual(response);
      });
  }));

  it('should make delete request', async(() => {
    let connection;
    let response = {};

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(
        new ResponseOptions({ body: JSON.stringify(response), status: 204 })
      ));
    });

    apiService.delete('/posts/1')
      .subscribe(post => {
        expect(post).toEqual(response);
      });
  }));

});
