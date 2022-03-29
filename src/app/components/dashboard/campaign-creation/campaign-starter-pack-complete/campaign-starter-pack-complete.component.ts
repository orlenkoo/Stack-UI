import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-starter-pack-complete',
  templateUrl: './campaign-starter-pack-complete.component.html',
  styleUrls: ['./campaign-starter-pack-complete.component.scss']
})
export class CampaignStarterPackCompleteComponent {

  packs = [{
    "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "packId": "13fa85f64-5717-4562-b3fc-2c963f66afa6",
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
      "trigger": "Home"
    },
    "questionsIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "created": "string",
    "lastModified": "string",
    "discountAmount": 5,
    "maxRedemptions": 100
  }]

  @Output() onNext: EventEmitter<void> = new EventEmitter();
  @Output() onSkip: EventEmitter<void> = new EventEmitter();


}
