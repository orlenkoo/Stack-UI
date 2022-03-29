import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-anatomy',
  templateUrl: './campaign-anatomy.component.html',
  styleUrls: ['./campaign-anatomy.component.scss']
})
export class CampaignAnatomyComponent {

  @Output() onNext: EventEmitter<void> = new EventEmitter();


}
