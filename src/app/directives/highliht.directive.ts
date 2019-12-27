import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighliht]'
})
export class HighlihtDirective {

  constructor(element:ElementRef) {

    element.nativeElement.style.backgroundColor = "red";
    
   }

}
