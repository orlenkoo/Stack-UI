import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stack-modal',
  templateUrl: './stack-modal.component.html',
  styleUrls: ['./stack-modal.component.scss'],
  animations: [
    trigger('modal', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class StackModalComponent implements OnInit {
  @Input() closable = false;
  @Input() open = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    this.open = false;
    this.openChange.emit(this.open);
  }

}
