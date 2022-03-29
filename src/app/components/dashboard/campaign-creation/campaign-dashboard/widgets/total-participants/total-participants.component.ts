import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-participants',
  templateUrl: './total-participants.component.html',
  styleUrls: ['./total-participants.component.scss']
})
export class TotalParticipantsComponent implements OnInit {

  totalParticipants = 72;
  changePercentage = '20%';

  constructor() { }

  ngOnInit(): void {
  }

}
