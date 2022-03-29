import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-pack-selection',
  templateUrl: './campaign-pack-selection.component.html',
  styleUrls: ['./campaign-pack-selection.component.scss']
})
export class CampaignPackSelectionComponent implements OnInit {
  value = 0;
  packs = [
    {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "13fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Learn",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "Learn who my customers are",
        "description": "Get to know your customers on a more personal level."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    },
    {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "23fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Learn",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "LEARN ABOUT MY COMPETITION",
        "description": "Deep dive into how you are fairing against the competition."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    },
    {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "33fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Learn",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "LEARN ABOUT MY MARKET",
        "description": "There’s always more to learn about what’s working in your industry and what’s not."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    },
    {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "43fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Measure",
      "description": "string",
      "estimatedTime": 5,
      "introduction": {
        "title": "Measure my customer experience",
        "description": "A steady flow of feedback means you can keep focussed on what's a priority."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "home"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    }, {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "53fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Measure",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "Measure my customer experience",
        "description": "A steady flow of feedback means you can keep focussed on what's a priority."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    }, {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "63fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Measure",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "Net Promoter Score (NPS)",
        "description": "The tried and true method of evaluating customer satisfaction"
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    }, {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "73fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Test",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "Learn who my customers are",
        "description": "Get to know your customers on a more personal level."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    }, {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "83fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Test",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "Learn who my customers are",
        "description": "Get to know your customers on a more personal level."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    }, {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "93fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Test",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "Learn who my customers are",
        "description": "Get to know your customers on a more personal level."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": [
        "age"
      ],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionsIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string"
    }
  ]

  toggledPack = ''

  @Input() campaign: any;
  @Output() campaignChange: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onPackChange(event: any, i: number): void {
    this.packs[i] = event
    if (!(this.campaign.packs || []).length) {
      const packs = [event];
      this.value = (packs || []).reduce((acc: number, current: any) => (current.discountAmount || 0) + acc, 0);
      this.campaignChange.emit({ ...(this.campaign || {}), packs: packs, totalDiscount: this.value })
    } else {
      const packIndex = this.campaign.packs.findIndex((pack: any) => pack?.packId === event?.packId);
      const packs = this.campaign?.packs || []
      if (packIndex === -1) {
        packs.push(event);
      } else {
        packs[packIndex] = event;
      }
      this.value = (packs || []).reduce((acc: number, current: any) => (current.discountAmount || 0) + acc, 0);

      this.campaignChange.emit({ ...(this.campaign || {}), packs, totalDiscount: this.value })
    }
  }

  trackByItems(index: number, item: any): number { return item.packId; }


}
