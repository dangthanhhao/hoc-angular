import { Directive, ElementRef, ViewContainerRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean){
    console.log(condition);
    if(!condition){
      this.parentRef.createEmbeddedView(this.templateRef);
    }else{
      this.parentRef.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>, private parentRef:ViewContainerRef) { }

}
