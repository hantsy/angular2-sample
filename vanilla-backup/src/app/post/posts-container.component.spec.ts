/* tslint:disable:no-unused-variable */
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { By }           from '@angular/platform-browser';
import {
  DebugElement,
  provide,
  Component
} from '@angular/core';
import {
  async,
  inject,
  TestComponentBuilder,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { PostsContainerComponent } from './posts-container.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, ResponseOptions } from '@angular/http';
import { Post } from './shared/models/post.model';
import { PostService } from './shared/services/post.service';
import { Observable } from 'rxjs/Rx';

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
  selector: 'app-posts-container',
  template: '<app-posts></app-posts>',
  directives: [PostsContainerComponent]
})
export class TestComponent {
}

// TestBed.initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );

describe('Component: Posts', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsContainerComponent],
      providers: [
        provide(PostService, { useClass: MockPostService })
      ],
      imports: [FormsModule, HttpModule]
    });
  });

  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  let router: Router;
  let component: PostsContainerComponent;

  beforeEach(
    async(
      inject([PostService], (service) => {
        router = jasmine.createSpyObj("Router", ['navigate']);
        component = new PostsContainerComponent(service, router);
      })
    )
  );

  it('should create an instance',
    () => {
      expect(component).toBeTruthy();
    }
  );

  it('ngOnInit should return 3 posts',
   () => {
      component.ngOnInit();
      expect(component.posts.length).toBe(3);
    }
  );

  it('should wrap content', () => {
    builder.createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        const title = fixture.nativeElement.querySelector('.page-title');
        fixture.detectChanges();

        expect(title.textContent.trim()).toEqual('posts-container works!');
      });

  });
});


