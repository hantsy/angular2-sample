import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { SignupForm} from '../shared/models/signup-form.model';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupForm: SignupForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signupForm = new SignupForm();
  }

  signup(signupForm: SignupForm, isValid: boolean) {
    if (isValid) {
      console.log('form data is valid:' + signupForm);
      this.authService.signup(signupForm);
      this.router.navigate(['/login']);
    }

  }

}
