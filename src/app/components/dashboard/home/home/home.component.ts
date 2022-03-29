import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
