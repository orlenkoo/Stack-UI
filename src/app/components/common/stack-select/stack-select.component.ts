import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const STACK_SELECT_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StackSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-stack-select',
  templateUrl: './stack-select.component.html',
  styleUrls: ['./stack-select.component.scss'],
  providers: [STACK_SELECT_VALUE_ACCESSOR]
})
export class StackSelectComponent implements OnInit, ControlValueAccessor {

  @Input() id: string | undefined;
  @Input() label: string | undefined;
  @Input() options: any[] = [];
  selectValue: string | undefined;
  @Output() selectValueChanged: EventEmitter<string>;
  isOpen = false;
  onChange: any;
  onTouched: any;
  get selectWrapper() {
    return document.querySelector(`#${this.id} .select-wrapper`);
  }
  get selectBox(){
    return document.querySelector(`#${this.id} .select-box`);
  }
  get optionsListBox() {
    return document.querySelector(`#${this.id} .options-list-box`);
  }
  get dropdownCaret() {
    return document.querySelector(`#${this.id} .caret`);
  }

  constructor() {
    this.selectValueChanged = new EventEmitter();
  }

  @HostListener('window:click',['$event'])
  handleClickOutside(e: MouseEvent) {
    const allowedTargets = [this.selectWrapper, this.selectBox, this.optionsListBox, this.dropdownCaret];
    const target = e.target as Element;
    if (!(allowedTargets.includes(target) || allowedTargets.includes(target.parentElement))) {
      this.toggleSelect('close');
    }
  }

  writeValue(obj: any): void {
    if (!obj) {
      return;
    }
    let selectedOption = this.options.find(opt => opt.value === obj);
    this.setActiveOption(selectedOption);
    this.selectValue = selectedOption?.label;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  toggleSelect = (action: string) => {
    switch (action) {
      case 'open':
        this.isOpen = true;
        break;
      case 'close':
        this.isOpen = false;
        break;
      case 'openclose':
        this.isOpen = !this.isOpen;
        break;
    };
  }

  detectKeyBoardClick = (e: KeyboardEvent, option?: any) => {
    if (e.code.toLowerCase() === 'space' || e.code.toLowerCase() === 'enter') {
      option? this.selectValueForDropDown(option) : this.toggleSelect('open');
    } else if (e.code.toLowerCase() === 'escape') {
      this.toggleSelect('close');
    }
  }

  selectValueForDropDown = (option: any) => {
    this.setActiveOption(option);
    this.selectValue = option.label;
    this.onChange(option.value);
    this.toggleSelect('close');
    this.selectValueChanged.emit(option);
  }

  setActiveOption = (option: any) => {
    if (!option) {
      return;
    }
    this.options.forEach(opt => {
      opt.value === option.value ? opt.active = true : opt.active = false;
    });
  }
}
