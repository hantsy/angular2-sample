import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';
import { LoginForm} from '../shared/model/login-form.model';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  credentials: LoginForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.credentials = new LoginForm();
  }

  login(credentials: LoginForm) {
    this.authService.login(credentials);
    this.router.navigate(['/']);
  }

}
