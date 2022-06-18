import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomAttr]'
})
export class CustomAttrDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightElement('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightElement('green');
  }

  highlightElement(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
