import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  open = false;
  campaigns:any = [];

  constructor() { }

  ngOnInit(): void {
    //TODO : Call get campaign API
  }

  campaignCreated(): void{
    //TODO : Make API call
    this.campaigns = [2];
  }

}
