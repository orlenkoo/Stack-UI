import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-configurable',
  templateUrl: './campaign-configurable.component.html',
  styleUrls: ['./campaign-configurable.component.scss']
})
export class CampaignConfigurableComponent {

  packs = [{
    "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "packId": "13fa85f64-5717-4562-b3fc-2c963f66afa6",
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


}
