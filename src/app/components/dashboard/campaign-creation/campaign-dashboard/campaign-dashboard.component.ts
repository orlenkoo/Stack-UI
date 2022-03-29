import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-dashboard',
  templateUrl: './campaign-dashboard.component.html',
  styleUrls: ['./campaign-dashboard.component.scss']
})
export class CampaignDashboardComponent implements OnInit {

  displayedColumns: string[] = ['packType', 'packName', 'status', 'responses', 'actions', 'active'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    //TODO : API call to get pack details
    let _packs = [
      {packType: 'Learn', packName: 'Know Your Customer', status: 'Active', responses: '25/100', active: true, id: 1},
      {packType: 'Learn', packName: 'Know Your Customer', status: 'Active', responses: '25/100', active: true, id: 2}
    ]
    this.dataSource = _packs;
  }


  getStatusChipColor () {
    
  }
}
