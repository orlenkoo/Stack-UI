import { Directive, HostListener, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective implements OnChanges{

  @Input()
  defaultExtension = '';

  constructor(private ngControl: NgControl) { }

  ngOnChanges(): void {
    this.onInputChange(this.defaultExtension, false);
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: string) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event: string, backspace: boolean) {
    let newVal = event.replace(/\D/g, '');
    // if (backspace && newVal.length <= 2) {
    //   newVal = newVal.substring(0, newVal.length - 1);
    // }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '(+$1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,4})/, '(+$1) $2');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,4})(\d{0,3})/, '(+$1) $2 $3');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,4})(\d{0,3})(\d{0,3})/, '(+$1) $2 $3 $4');
    } else {
      newVal = newVal.substring(0, 12);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,4})(\d{0,3})(\d{0,3})/, '(+$1) $2 $3 $4');
    }
    this.ngControl!.valueAccessor!.writeValue(newVal);
  }

}
