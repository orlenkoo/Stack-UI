import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-questions-answered',
  templateUrl: './total-questions-answered.component.html',
  styleUrls: ['./total-questions-answered.component.scss']
})
export class TotalQuestionsAnsweredComponent implements OnInit {

  totalQuestionsAnswered = 768;
  changePercentage = '33%';


  constructor() { }

  ngOnInit(): void {
  }

}
