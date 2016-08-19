/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide, Component } from '@angular/core';
import {
  async, inject,
  TestComponentBuilder,
  ComponentFixture
} from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { Injectable } from '@angular/core';
import {Post} from '../shared/model/post.model';
import {PostForm} from '../shared/model/post-form.model';
import {PostService} from '../shared/service/post.service';
import {Observable} from 'rxjs/Rx';

class MockPostService {
  nextId: number = 100;
  posts: Post[] = [
    { id: 1, title: 'Fist Post ', content: 'Content of First Post' },
    { id: 2, title: 'Second Post ', content: 'Content of Second Post' },
    { id: 3, title: 'Third Post ', content: 'Content of Third Post' }
  ];

  constructor() { }
  getPosts() {
    return Observable.of(this.posts);
  }

  // getPost(id: number) {
  //   return Observable.of(this.posts.find(post => post.id === id));
  // }

  // save(data: PostForm) {
  //   this.posts.push({ id: this.nextId++, title: data.title, content: data.content });
  // }

  // update(id: number, data: PostForm) {
  //   this.posts
  //     .filter((post) => post.id === id)
  //     .map(p => { p.title = data.title; p.content = data.content; });
  // }
}

@Component({
  template: '',
  directives: [PostsComponent]
})
export class TestComponent {
}

describe('Component: Posts', () => {
  // beforeEach(() => {
  //   addProviders([
  //     provide(PostService, { useClass: MockPostService })
  //   ]);
  // });

  // it('should create an instance', async(inject([PostService], (service) => {
  //   let component = new PostsComponent(service);
  //   expect(component).toBeTruthy();
  // }))
  // );

  // it('ngOnInit should return 3 posts',
  //   inject([PostService], (service) => {
  //     let component = new PostsComponent(service);
  //     component.ngOnInit();
  //     expect(component.posts.length).toBe(3);
  //   })
  // );

  // it('should wrap content', async(inject([TestComponentBuilder], (tcb) => {
  //   tcb.overrideTemplate(TestComponent, '<app-posts></app-posts>')
  //     .createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
  //       fixture.detectChanges();
  //       var compiled = fixture.debugElement.nativeElement;
  //       console.log('compiled app posts components:'+compiled);
  //       expect(compiled).toContainText('123');
  //     });
  // })));
});



