/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

xdescribe('Component: Navbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [
        NavbarComponent,
      ],
    });
  });

  it('should create the Navbar component', async(() => {
    let fixture = TestBed.createComponent(NavbarComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});
