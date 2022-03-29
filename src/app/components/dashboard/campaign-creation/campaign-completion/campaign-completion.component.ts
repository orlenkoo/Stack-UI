import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-completion',
  templateUrl: './campaign-completion.component.html',
  styleUrls: ['./campaign-completion.component.scss']
})
export class CampaignCompletionComponent implements OnInit {
  @Output() onNext: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
