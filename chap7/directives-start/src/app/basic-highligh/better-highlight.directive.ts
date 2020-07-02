import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@HostBinding('style.backgroundColor') backgroundColor:string= 'transparent';
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }
ngOnInit(){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  
}
@HostListener('mouseenter') mouseover(eventData:Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
  this.backgroundColor='red';
}
@HostListener('mouseleave') mouseexit(eventData:Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
  this.backgroundColor='transparent';
}
}
