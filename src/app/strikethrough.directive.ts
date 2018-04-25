import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style.textDecoration = 'line-through';
    
  }
  @HostListener("click") onClicks(){
    this.textDeco('uppercase');
  }
  
  @HostListener("dblclick") onDoubleClick(){
    this.textDeco('None');
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
