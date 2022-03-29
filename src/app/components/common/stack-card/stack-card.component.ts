import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BotPNGDataURI } from '../../../svgs/bot.pngs';

interface Stack {
  packId: string | number;
  brandImageUrl?: string | undefined;
  discountAmount: number;
  estimatedTime: number;
  introduction: {
    title: string | undefined;
    description: string | undefined;
  },
  infoRequired: String[];
  questionIds: string[];
  completed?: boolean;
  theme?: string;
  [k: string]: unknown
}
@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrls: ['./stack-card.component.scss']
})
export class StackCardComponent implements OnInit {
  timeIcon = BotPNGDataURI.ModalIcon.time;

  @Input() stack: Stack = {} as Stack;
  @Input() background: string | undefined;
  constructor(public ref: ElementRef) { }


  ngOnInit(): void {
  }

}
