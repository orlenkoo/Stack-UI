import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  @Input() question: string = '';
  @Input() questionDesc: string = '';
  @Input() answer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
