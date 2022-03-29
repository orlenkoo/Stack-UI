import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-color-selection',
  templateUrl: './campaign-color-selection.component.html',
  styleUrls: ['./campaign-color-selection.component.scss']
})
export class CampaignColorSelectionComponent implements OnInit {
  colors = [{
    name: 'Melbourne Moonlinght',
    value: 'linear-gradient(156.6deg, #1E2640 0%, #395A82 47.4%, #4789BA 99.99%, #4FCAFF 100%)'
  }, {
    name: 'Bondi Blue',
    value: 'linear-gradient(156.6deg, #395A82 0%, #4789BA 49.48%, #4FCAFF 100%)'
  }, {
    name: 'Very Berry',
    value: 'linear-gradient(157.31deg, #1E2640 0%, #654572 0.01%, #AB5B89 50.7%, #FF7E8E 102.47%)'
  }, {
    name: 'Surry Sunset',
    value: 'linear-gradient(156.6deg, #CD5E6D 0%, #FFB164 100%)'
  }, {
    name: 'Navy',
    value: '#1E2640'
  }];

  stack = {
    packId: 1,
    brandImageUrl: '',
    discountAmount: 5,
    estimatedTime: 1,
    introduction: {
      title: 'Tell us about you!',
      description: 'We’re really keen to get to know you a little better.',
    },
    completionTitle: '',
    completionDescription: '',
    infoRequired: ['Age', 'Gender', 'Postcode'],
    questionIds: [],
    completed: false,
  }

  @Input() campaign: any;
  @Output() campaignChange: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.campaignChange.emit({ ...(this.campaign || {}), theme: this.colors[0] })
  }

  onColorSelect(color: { name: string, value: string }): void {
    this.campaignChange.emit({ ...(this.campaign || {}), theme: color })
  }

}
