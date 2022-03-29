import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BotPNGDataURI } from 'src/app/svgs/bot.pngs';

@Component({
  selector: 'app-campaign-pack',
  templateUrl: './campaign-pack.component.html',
  styleUrls: ['./campaign-pack.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CampaignPackComponent implements OnInit {
  icons = BotPNGDataURI.PackIcon;
  discountLimit = [2, 5, 10];
  responseLimit = [20, 50, 100];

  selectedDiscountLimit = 0
  selectedResponseLimit = 0
  value = {
    maxRedemptions: 0,
    discountAmount: 0
  };
  isDeletePack = false;

  @Input() pack: any;
  @Output() packChange: EventEmitter<any> = new EventEmitter();
  @Input() toggledPack: any;
  @Input() actionVisible = true;
  @Output() toggledPackChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.pack.discountAmount && this.pack.maxRedemptions) {
      this.value = {
        maxRedemptions: this.pack.maxRedemptions,
        discountAmount: this.pack.discountAmount
      }
    }
  }

  onChange(value: any): void {
    this.value = { ...this.value, ...(value || {}) }
    this.toggledPackChange.emit(this.pack.packId)
    /* if (this.value.discountAmount && this.value.maxRedemptions) {
      this.packChange.emit({ ...(this.pack || {}), ...(this.value || {}) });
    } */
  }

  editPack(): void {
    this.toggledPackChange.emit(this.pack.packId)
    if (this.pack.discountAmount && this.pack.maxRedemptions) {
      this.value = {
        maxRedemptions: this.pack.maxRedemptions,
        discountAmount: this.pack.discountAmount
      }
    }
  }

  addPack(event: any) : void{
    if (this.pack?.discountAmount && this.pack?.maxRedemptions) event.stopPropagation();
    if (this.value.discountAmount && this.value.maxRedemptions) {
      this.packChange.emit({ ...(this.pack || {}), ...(this.value || {}) });
      this.value = {
        maxRedemptions: 0,
        discountAmount: 0
      }
      setTimeout(() => this.toggledPackChange.emit(''), 0);
    }
  }

  toggleDeleteIcon(): void {
    if (this.pack.discountAmount && this.pack.maxRedemptions) {
      this.isDeletePack = !this.isDeletePack
    }
  }
}
