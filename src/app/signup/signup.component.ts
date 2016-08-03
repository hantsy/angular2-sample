import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';
import { SignupForm} from '../shared/model/signup-form.model';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit {
  private signupForm: SignupForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signupForm = new SignupForm();
  }

  signup(signupForm: SignupForm) {
    this.authService.login(signupForm);
    this.router.navigate(['/']);
  }

}
