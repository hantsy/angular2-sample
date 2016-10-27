import { Directive, ElementRef, Input, Renderer, HostBinding, Attribute, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit, OnDestroy {

  @Input() appShowAuthed: boolean;
  sub: Subscription;

  constructor(private af: AngularFire, private el: ElementRef, private renderer: Renderer) {
    console.log('[appShowAuthed] value:' + this.appShowAuthed);
  }

  ngOnInit() {
    console.log('[appShowAuthed] ngOnInit:');
    this.sub = this.af.auth.subscribe((res) => {
      if (res) {
        if (this.appShowAuthed) {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inherit');
        } else {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }

      } else {
        if (this.appShowAuthed) {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        } else {
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inherit');
        }
      }
    });
  }

  ngOnDestroy() {
    console.log('[appShowAuthed] ngOnDestroy:');
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
