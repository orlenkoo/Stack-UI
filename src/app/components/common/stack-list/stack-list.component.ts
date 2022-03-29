import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent {
  @Input() limit = 0;
  @Input() stacks = [
    {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "13fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Learn",
      "description": "string",
      "estimatedTime": 2,
      "introduction": {
        "title": "How well are we doing?",
        "description": "Let us know what you thin of our brand as we evolve."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": ['Age', 'Gender', 'Postcode'],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string",
      "discountAmount": 5,
      "maxRedemptions": 50,
      "theme": 'bondi_blue'
    },
    {
      "accountId": "13fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "113fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Learn",
      "description": "string",
      "estimatedTime": 1,
      "introduction": {
        "title": "Did you find what you were after?",
        "description": "What could we do to help you get to checkout faster?"
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": ['Age', 'Gender', 'Postcode'],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string",
      "discountAmount": 2,
      "maxRedemptions": 50,
      "theme": 'bondi_blue'
    },
    {
      "accountId": "213fa85f64-5717-4562-b3fc-2c963f66afa6",
      "packId": "2113fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "Learn",
      "description": "string",
      "estimatedTime": 1,
      "introduction": {
        "title": "Leave us some feedback",
        "description": "Help us focus on the highest priority thigns for you."
      },
      "completion": {
        "title": "string",
        "description": "string"
      },
      "infoRequired": ['Age', 'Gender', 'Postcode'],
      "packPolicy": {
        "customer": "all",
        "trigger": "checkout"
      },
      "questionIds": [
        "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      ],
      "created": "string",
      "lastModified": "string",
      "discountAmount": 2,
      "maxRedemptions": 50,
      "theme": 'bondi_blue'
    }
  ]
  start = 0

}
