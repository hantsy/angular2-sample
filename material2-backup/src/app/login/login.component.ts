import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginForm } from '../shared/';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  private credentials: LoginForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.credentials = new LoginForm();
  }

  login(credentials: LoginForm, isValid: boolean) {
    if (isValid) {
      this.authService.login(credentials);
      if (!!this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}
