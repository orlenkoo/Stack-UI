import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-stack-input',
  templateUrl: './stack-input.component.html',
  styleUrls: ['./stack-input.component.scss']
})
export class StackInputComponent implements OnInit {

  @Input() type: string | undefined;
  @Input() id: string | undefined;
  @Input() required: boolean = false;
  @Input() label: string | undefined;
  @Input() hint: string | undefined;
  @Input() value: string | undefined;
  @Input() useMask: boolean = false;
  @Input() validation: {valid: boolean, msg: string} = {valid: true, msg: ''};
  @Input() validators: ValidatorFn[] = [];
  @Input() control: FormControl = new FormControl(undefined);
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();
  @Output() blurEvent: EventEmitter<string> = new EventEmitter();
  @Output() focusEvent: EventEmitter<string> = new EventEmitter();

  handleClick = () => {
    this.clickEvent.next('click');
  };

  handleBlur = () => {
    this.blurEvent.next('blur');
  };

  handleFocus = () => {
    this.focusEvent.next('focus');
  }


  constructor() {
    if (this.required) {
      this.validators.push(Validators.required);
    }
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.valueChange.emit(value);
    })
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }

}
