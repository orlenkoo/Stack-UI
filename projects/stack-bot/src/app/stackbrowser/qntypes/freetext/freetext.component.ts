import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerStoreService } from '../../../service/answer-store.service';
import { QuestionTypeInterface } from '../question.interface';
import { QuestionType } from '../questionType.enum';

@Component({
  selector: 'app-freetext',
  templateUrl: './freetext.component.html',
  styleUrls: ['./freetext.component.scss'],
})
export class FreetextComponent implements OnInit, QuestionTypeInterface {
  freetext_value: string | undefined;

  @Input()
  id: string = '';

  @Output()
  answered: EventEmitter<any> = new EventEmitter();

  @Output()
  error: EventEmitter<void> = new EventEmitter();

  constructor(private answerStore: AnswerStoreService) {}

  ngOnInit(): void {
    let answer =
      this.answerStore.answers[QuestionType.FREE_TEXT + '#' + this.id];
    this.freetext_value = answer;
    this.checkValuePresent();
  }

  checkValuePresent = () => {
    if (this.freetext_value) {
      this.answered.emit({
        qnType: QuestionType.FREE_TEXT,
        value: this.freetext_value,
      });
    } else {
      this.error.emit();
    }
  };
}
