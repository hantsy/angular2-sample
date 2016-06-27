/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PostService } from './post.service';

describe('Post Service', () => {
  beforeEachProviders(() => [PostService]);

  it('should ...',
      inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
