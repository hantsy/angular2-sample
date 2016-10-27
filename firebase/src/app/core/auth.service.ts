import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public auth$: FirebaseAuth) {
    this.auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithEmailAndPassword(data: any): firebase.Promise<FirebaseAuthState>  {
    console.log('signin with credentials:' + data);
    return  this.auth$.login(
      data,
      { provider: AuthProviders.Password, method: AuthMethods.Password }
    );
  }

  createUserWithEmailAndPassword(data: any): firebase.Promise<FirebaseAuthState>{
    return this.auth$.createUser(data);
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Facebook);
  }

  signOut(): void {
    this.auth$.logout();
  }

}
