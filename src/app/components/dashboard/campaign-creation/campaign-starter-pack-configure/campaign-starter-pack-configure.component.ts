import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-starter-pack-configure',
  templateUrl: './campaign-starter-pack-configure.component.html',
  styleUrls: ['./campaign-starter-pack-configure.component.scss']
})
export class CampaignStarterPackConfigureComponent {

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
  }]

  @Output() onNext: EventEmitter<void> = new EventEmitter();
  @Output() onSkip: EventEmitter<void> = new EventEmitter();
  onPackChange(event: any, i: number): void {
    this.packs[i] = { ...this.packs[i], ...event }
  }
}
