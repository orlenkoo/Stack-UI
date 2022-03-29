import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerStoreService } from '../../../service/answer-store.service';
import { DataStoreService } from '../../../service/data-store.service';
import { Option } from '../option.interface';
import { QuestionTypeInterface } from '../question.interface';
import { QuestionType } from '../questionType.enum';

@Component({
  selector: 'app-abpoll',
  templateUrl: './abpoll.component.html',
  styleUrls: ['./abpoll.component.scss'],
})
export class AbpollComponent implements OnInit, QuestionTypeInterface {
  @Input()
  id: string = '';

  @Output()
  answered: EventEmitter<any> = new EventEmitter();

  @Input()
  options: Option[] = [];

  theme = this.dataStore.sessionData.theme.toLowerCase();

  constructor(
    private answerStore: AnswerStoreService,
    private dataStore: DataStoreService
  ) {}

  ngOnInit(): void {
    let answer = this.answerStore.answers[QuestionType.AB_POLL + '#' + this.id];
    answer && this.selectOption(answer);
  }

  selectOption = (option: Option) => {
    this.options.forEach((opt) => {
      if (opt.id === option.id) {
        opt.active = true;
        this.answered.emit({
          qnType: QuestionType.AB_POLL,
          value: option,
        });
      } else {
        opt.active = false;
      }
    });
  };

  checkProperKeys = (keydown: KeyboardEvent, option: Option) => {
    if (
      keydown.code.toLowerCase() === 'space' ||
      keydown.code.toLowerCase() === 'enter'
    ) {
      this.selectOption(option);
    }
  };
}
