import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor() { }

  highlight : boolean = false;

  //Binding with class.highlight
  @HostBinding('class.highlight')
  get bindHighlight(){
    return this.highlight ;
  }

  @HostListener('mouseover') onMouseOver(){
    this.highlight = true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.highlight = false;
  }

}
