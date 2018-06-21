import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('appInputFormat') options: InputFormatDirectiveOptions;

  @HostListener('focus') onFocus() {
    console.log('on focus')
  }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.options.format == 'uppercase') 
      value = value.toUpperCase();
    else
      value = value.toLowerCase();
    
    value = value.substring(0, this.options.maxsize);

    this.el.nativeElement.value = value;
  }
}

export class InputFormatDirectiveOptions {
  format: string;
  maxsize: number = 100;
}
