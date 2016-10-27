import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);

  constructor(private af: AngularFire) { }

  ngOnInit() {
  }

  logout() {
    console.log('calling onLogout...');
    this.signOut.emit(true);
  }

}
