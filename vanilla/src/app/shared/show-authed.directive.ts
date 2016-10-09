import { Directive, ElementRef, Input, Renderer, HostBinding, Attribute, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit, OnDestroy {

  @Input() appShowAuthed: boolean;

  constructor(private authService: AuthService, private el: ElementRef, private renderer: Renderer, @Attribute('appShowAuthed') attr: boolean) {
    console.log('[appShowAuthed] value:' + this.appShowAuthed);

  }

  ngOnInit() {
    this.authService.current.subscribe((res) => {
      if (res) {
        if (this.appShowAuthed) {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inherit');
        }
        else {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }

      } else {
        if (this.appShowAuthed) {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
        else {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inherit');
        }
      }
    });
  }

  ngOnDestroy(){

  }

}
