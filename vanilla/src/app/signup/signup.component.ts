import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  username: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
  passwordGroup: FormGroup;

  /*
    * const form = new FormGroup({
   *   password: new FormControl('', Validators.minLength(2)),
   *   passwordConfirm: new FormControl('', Validators.minLength(2)),
   * }, passwordMatchValidator);
   *
   *
   * function passwordMatchValidator(g: FormGroup) {
   *    return g.get('password').value === g.get('passwordConfirm').value
   *       ? null : {'mismatch': true};
   * }
  */
  // data = { username: '', password: '', firstName: '', lastName: '' };

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.username = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.passwordConfirm = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);

    this.passwordGroup = fb.group(
      {
        password: this.password,
        passwordConfirm: this.passwordConfirm
      },
      { validator: this.passwordMatchValidator }
    );

    this.signupForm = fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      passwordGroup: this.passwordGroup
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : { 'mismatch': true };
  }

  // validateEmail(c: FormControl) {
  //   let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  //   return EMAIL_REGEXP.test(c.value) ? null : {
  //     validateEmail: {
  //       valid: false
  //     }
  //   };
  // }

  ngOnInit() {
  }

  submit() {
    console.log('saving signup form data@' + this.signupForm.value);
    let value = this.signupForm.value;
    let data = {
      firstName: value.firstName,
      lastName: value.lastName,
      username: value.username,
      password: value.passwordGroup.password
    };
    this.authService.attempAuth('signup', data);
  }

}
