import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-packs-completed',
  templateUrl: './total-packs-completed.component.html',
  styleUrls: ['./total-packs-completed.component.scss']
})
export class TotalPacksCompletedComponent implements OnInit {

  totalPacksCompleted = 355;
  changePercentage = '11%';

  constructor() { }

  ngOnInit(): void {
  }

}
