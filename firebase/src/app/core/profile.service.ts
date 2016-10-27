import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from './auth.service';

@Injectable()
export class ProfileService {

  private profile$: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire, private auth: AuthService) {
    const path = `profile/${this.auth.id}`;
    this.profile$ = this.af.database.object(path);
  }

  get data(){
    return this.profile$;
  }

  save(data: any) {
    return this.profile$.set(data);
  }

  update(data: any) {
    return this.profile$.update(data);
  }
}
