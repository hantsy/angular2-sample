import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit,
OnDestroy {

  data = {
    username: '',
    password: ''
  };

  sub: Subscription;

  constructor(private authServcie : AuthService) {}

  ngOnInit() {}

  submit() {
    console.log('signin with credentials:' + this.data);
    this
      .authServcie
      .attempAuth('signin', this.data);

  }

  ngOnDestroy() {
    //if (this.sub) { this.sub.unsubscribe(); }
  }

}
