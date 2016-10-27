import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService, ProfileService } from '../core/';
import { FirebaseAuth, AngularFire, FirebaseAuthState} from 'angularfire2';

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
  password: FormControl;
  passwordConfirm: FormControl;
  passwordGroup: FormGroup;

  constructor(private auth: AuthService, private profileService: ProfileService, private router: Router, private fb: FormBuilder) {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
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
      passwordGroup: this.passwordGroup
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : { 'mismatch': true };
  }

  ngOnInit() {
  }

  submit() {
    console.log('saving signup form data@' + this.signupForm.value);
    let value = this.signupForm.value;
    let profileData = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
    };

    let signUpData = {
      email: value.email,
      password: value.passwordGroup.password
    };

    this.auth.createUserWithEmailAndPassword(signUpData)
      .then(
       (user: FirebaseAuthState) =>{
         console.log('signin @' + user);
         this.profileService.save(profileData)
           .then(
             res => {
               console.log(res);
               this.router.navigate(['']);
             }
           );
        }
      );
  }

}
