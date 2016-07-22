/* tslint:disable:no-unused-variable */

import {
  beforeEach,
  addProviders,
  describe,
  xdescribe,
  expect,
  it,
  xit,
  async,
  inject,
  fakeAsync,
  tick
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
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  beforeEach(() => {
    addProviders([
      AuthService,
      BaseRequestOptions,
      MockBackend,
      provide(Http, {
        useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
      })
    ]);
  });

  it('AuthService should be injected.',
    inject([AuthService],
      (service: AuthService) => {
        expect(service).toBeTruthy();
      }));

  it('login sucessfully',
    inject([AuthService, MockBackend], fakeAsync((authService, mockBackend) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/auth/login');
        let response = new ResponseOptions({ body: JSON.stringify({ token: '123' }) });
        c.mockRespond(new Response(response));
      });
      authService.login({ username: 'test', password: 'test' });
      tick(1000);

      expect(authService.token).toBe('123');
      expect(authService.loggedIn).toBeTruthy;
    }))
  );

  xit('signup sucessfully',
    inject([AuthService, MockBackend], fakeAsync((authService, mockBackend) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('/api/auth/signup');
        let response = new ResponseOptions({ status: 201 });
        c.mockRespond(new Response(response));
      });
      authService.login({ username: 'test', password: 'test', email: 'hantsy@gmail.com' });
      tick(1000);

      expect(authService.loggedIn).toBe(false);
    }))
  );
});
