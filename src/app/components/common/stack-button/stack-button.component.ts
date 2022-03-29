import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stack-button',
  templateUrl: './stack-button.component.html',
  styleUrls: ['./stack-button.component.scss']
})
export class StackButtonComponent implements OnInit {

  @Input() type: string = 'primary';
  @Input() label: string | undefined;
  @Input() buttonDisabled: boolean = false;
  @Input() imageSrc: string | undefined;
  @Input() alignment: string = '';
  @Output() buttonClicked: EventEmitter<any>;

  constructor() {
    this.buttonClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClicked.emit();
  }

}
