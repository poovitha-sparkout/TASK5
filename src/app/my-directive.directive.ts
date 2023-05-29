import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }
  }
  
