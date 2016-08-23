/* tslint:disable:no-unused-variable */

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement, provide, Component } from '@angular/core';
import {
  async, inject,
  TestComponentBuilder,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, ResponseOptions } from '@angular/http';
import {Post} from './shared/model/post.model';
import {PostForm} from './shared/model/post-form.model';
import {PostService} from './shared/service/post.service';
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
    let res = new ResponseOptions();
    res.body = JSON.stringify(this.posts);
    return Observable.of(res);
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
  template: '<app-posts></app-posts>',
  directives: [PostsComponent]
})
export class TestComponent {
}

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('Component: Posts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [
        provide(PostService, { useClass: MockPostService })
      ],
      imports: [FormsModule, HttpModule]
    });
  });

  it('should create an instance',
    async(
      inject([PostService], (service) => {
        let component = new PostsComponent(service);
        expect(component).toBeTruthy();
      })
    )
  );

  it('ngOnInit should return 3 posts',
    inject([PostService], (service) => {
      let component = new PostsComponent(service);
      component.ngOnInit();
      expect(component.posts.length).toBe(3);
    })
  );

  it('should wrap content', () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    });

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.innerText).toContain('posts works!');
  });
});



