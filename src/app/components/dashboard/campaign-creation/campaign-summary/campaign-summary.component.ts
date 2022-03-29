import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-summary',
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss']
})
export class CampaignSummaryComponent implements OnInit {
  @Input() campaign: any;
  @Output() campaignChange: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
