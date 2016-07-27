import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[is-loggedin]'
})
export class IsLoggedin {

  constructor(private eleRef: ElementRef) {

  }

}
