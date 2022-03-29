import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.scss']
})
export class CampaignCreateComponent implements OnInit {
  state = 'campagin-description';

  @Input() open = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter();
  @Output() campaignCreatedEvent = new EventEmitter();

  campaign = {};
  stacks = [
    {
      id: 1,
      brandImageUrl: '',
      amountToSave: 10,
      durationForSurvey: 15,
      cardTitle: 'How well are we doing?',
      cardDescription: 'Let us know what you thin of our brand as we evolve.',
      completionTitle: '',
      completionDescription: '',
      infoRequired: ['Age', 'Gender', 'Postcode'],
      questionIds: [],
      completed: false,
      theme: 'bondi_blue'
    }, {
      id: 1,
      brandImageUrl: '',
      amountToSave: 2,
      durationForSurvey: 1,
      cardTitle: 'Did you find what you were after?',
      cardDescription: 'What could we do to help you get to checkout faster?',
      completionTitle: '',
      completionDescription: '',
      infoRequired: ['Age', 'Gender', 'Postcode'],
      questionIds: [],
      completed: false,
      theme: 'bondi_blue'
    }, {
      id: 1,
      brandImageUrl: '',
      amountToSave: 0,
      durationForSurvey: 0,
      cardTitle: 'Leave us some feedback',
      cardDescription: 'Help us focus on the highest priority thigns for you.',
      completionTitle: '',
      completionDescription: '',
      infoRequired: ['Age', 'Gender', 'Postcode'],
      questionIds: [],
      completed: false,
      theme: 'bondi_blue'
    }
  ]

  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // TODO: debug why button values are not converted
    setTimeout(() => {
      this._cdr.detectChanges();
    });
  }

  showPackSelection(): void {
    // this.state = 'pack-selection'
    this.state = 'pack-anatomy'
  }

}
