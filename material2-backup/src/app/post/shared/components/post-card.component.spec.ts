/* tslint:disable:no-unused-variable */
import {
  addProviders,
  inject,
  async,
  TestComponentBuilder,
  ComponentFixture
} from '@angular/core/testing';

import { Component } from '@angular/core';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PostCardComponent } from './post-card.component';

@Component({
  selector: 'app-post-card-test',
  directives: [
    PostCardComponent
  ],
  template: '<app-post-card [post]="post"></app-post-card>'
})
class TestComponent {
  post = {
    id: 1,
    title: 'post title',
    content: 'post content'
  }
}

describe('NoteCard', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should display the correct title', async(() => (
    builder.createAsync(TestComponent)
    .then((fixture: ComponentFixture<TestComponent>) => {
      const title = fixture.nativeElement.querySelector('.title p');
      fixture.detectChanges();

      expect(title.textContent.trim()).toEqual('post title');
    })
  )));

  // it('should toggle checkmark', async(() => (
  //   builder.createAsync(TestComponent)
  //   .then((fixture: ComponentFixture<TestComponent>) => {
  //     const noteCard = fixture.nativeElement.querySelector('.note-card');
  //     fixture.detectChanges();

  //     const evObj = document.createEvent('MouseEvents');
  //     evObj.initEvent('mouseenter', true, false);
  //     noteCard.dispatchEvent(evObj);
  //     fixture.detectChanges();

  //     let check = noteCard.querySelector('.icon');
  //     expect(check).toBeTruthy();

  //     evObj.initEvent('mouseleave', true, false);
  //     noteCard.dispatchEvent(evObj);
  //     fixture.detectChanges();

  //     check = noteCard.querySelector('.icon');
  //     expect(check).toBeNull();
  //   })
  // )))
});

