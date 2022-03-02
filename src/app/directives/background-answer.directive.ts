import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundAnswer]'
})
export class BackgroundAnswerDirective {
@Input() correctAnswer:boolean=false;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { 
    this.elRef.nativeElement
  }

  @HostListener('click') clickedAnswer(){
    this.correctAnswer?this.renderer.setStyle(this.elRef.nativeElement,'background-color','#75b798'):this.renderer.setStyle(this.elRef.nativeElement,'background-color','#f1aeb5');
  }
}
