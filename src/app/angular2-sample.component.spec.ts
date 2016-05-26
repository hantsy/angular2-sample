import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2SampleAppComponent } from '../app/angular2-sample.component';

beforeEachProviders(() => [Angular2SampleAppComponent]);

describe('App: Angular2Sample', () => {
  it('should create the app',
      inject([Angular2SampleAppComponent], (app: Angular2SampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-sample works!\'',
      inject([Angular2SampleAppComponent], (app: Angular2SampleAppComponent) => {
    expect(app.title).toEqual('angular2-sample works!');
  }));
});
