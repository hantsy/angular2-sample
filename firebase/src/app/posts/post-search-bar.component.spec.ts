/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostSearchBarComponent } from './post-search-bar.component';

describe('PostSearchBarComponent', () => {
  let component: PostSearchBarComponent;
  let fixture: ComponentFixture<PostSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
