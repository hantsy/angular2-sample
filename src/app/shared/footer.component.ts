import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  template: '<hr><div>{{copyright}}</div>'
})
export class FooterComponent {
  copyright = 'Hantsy';
}