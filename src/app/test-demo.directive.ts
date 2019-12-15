import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestDemo]'
})
export class TestDemoDirective {

  constructor() { }

  @HostBinding('style.border') border: string;
  @HostListener('click') onclick() {
    console.log('Host listener click...');
    this.border = "solid 5px red";
  }

}
