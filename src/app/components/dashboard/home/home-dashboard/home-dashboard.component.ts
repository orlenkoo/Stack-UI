import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'packCompleted', 'gender', 'age', 'location', 'checkedOut'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    //TODO : API call to get pack details
    let _liveFeed:any = [
      // {date: '21/05', time: '12:01', packCompleted: 'Know Your Customer', gender: 'Male', age: '25', id: 1, location: 'NSW', checkedOut: 'Yes'}
    ]
    this.dataSource = _liveFeed;
  }

}
