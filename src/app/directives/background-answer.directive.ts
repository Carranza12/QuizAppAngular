import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundAnswer]'
})
export class BackgroundAnswerDirective {
@Input() correctAnswer:boolean=false;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('click') clickedAnswer(){
    this.correctAnswer?this.renderer.setStyle(this.elRef.nativeElement,'background-color','green'):this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }
}
