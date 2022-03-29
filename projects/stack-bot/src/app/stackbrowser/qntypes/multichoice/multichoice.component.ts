import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerStoreService } from '../../../service/answer-store.service';
import { DataStoreService } from '../../../service/data-store.service';
import { Option } from '../option.interface';
import { QuestionTypeInterface } from '../question.interface';
import { QuestionType } from '../questionType.enum';

@Component({
  selector: 'app-multichoice',
  templateUrl: './multichoice.component.html',
  styleUrls: ['./multichoice.component.scss'],
})
export class MultichoiceComponent implements OnInit, QuestionTypeInterface {
  selectedOptions: Option[] = [];
  theme = this.dataStore.sessionData.theme.toLowerCase();

  @Input()
  options: Option[] = [];

  @Input()
  multi: boolean = false;

  @Input()
  id: string = '';

  @Output()
  answered: EventEmitter<any> = new EventEmitter();

  @Output()
  error: EventEmitter<void> = new EventEmitter();

  constructor(
    private answerStore: AnswerStoreService,
    private dataStore: DataStoreService
  ) {}

  ngOnInit(): void {
    let qnType = this.multi
      ? QuestionType.MULTI_SELECT
      : QuestionType.MULTI_CHOICE;
    let answer = this.answerStore.answers[qnType + '#' + this.id];
    answer?.forEach((opt: Option) => {
      this.setAnswer(opt);
    });
  }

  setAnswer(answer: Option): void {
    if (!this.multi) {
      this.selectedOptions = [];
      this.options.forEach((opt) => {
        if (opt.id === answer.id) {
          this.selectedOptions.push(answer);
          opt.active = true;
        } else {
          opt.active = false;
        }
      });
    } else {
      let answerIndex = -1;
      this.selectedOptions.forEach((opt, i) => {
        if (answer.id === opt.id) {
          answerIndex = i;
        }
      });
      this.options.forEach((opt) => {
        if (opt.id === answer.id) {
          if (answerIndex > -1) {
            this.selectedOptions.splice(answerIndex, 1);
            opt.active = false;
          } else {
            this.selectedOptions.push(answer);
            opt.active = true;
          }
        }
      });
    }
    if (this.selectedOptions.length > 0) {
      this.answered.emit({
        qnType: this.multi
          ? QuestionType.MULTI_SELECT
          : QuestionType.MULTI_CHOICE,
        value: this.selectedOptions,
      });
    } else {
      this.error.emit();
    }
  }

  checkProperKeys = (keydown: KeyboardEvent, option: Option) => {
    let code = keydown.code.toLowerCase();
    if (code === 'space' || code === 'enter') {
      this.setAnswer(option);
    }
  };
}
