import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
constructor(private elementRef:ElementRef){ console.log('custom directive 1 started!')}
ngOnInit(){
    console.log('Custom directive started');
    console.log(this.elementRef.nativeElement.style);
    this.elementRef.nativeElement.style.backgroundColor='green';

}
}