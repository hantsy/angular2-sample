import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    console.log('calling onLogout...');
    this.authService.logout();
  }

}
