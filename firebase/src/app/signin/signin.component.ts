import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  data = { email: '', password: ''};

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  signInWithEmailAndPassword(){
    this.auth.signInWithEmailAndPassword(this.data)
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/posts']);
  }

}
