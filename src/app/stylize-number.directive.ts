import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[stylizeNumber]'
})
export class StylizeNumberDirective {
  @Input('value') private number: number;

  constructor(private el: ElementRef) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.number) {
      console.log('input changed');
      if (this.number.toString(10).includes('1')) {
        this.el.nativeElement.style.letterSpacing = '9px';
        this.el.nativeElement.style.marginRight = '-9px';
      }
    }
  }
}
