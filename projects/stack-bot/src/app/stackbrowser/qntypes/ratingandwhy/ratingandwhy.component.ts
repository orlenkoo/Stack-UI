import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerStoreService } from '../../../service/answer-store.service';
import { QuestionTypeInterface } from '../question.interface';
import { QuestionType } from '../questionType.enum';

@Component({
  selector: 'app-ratingandwhy',
  templateUrl: './ratingandwhy.component.html',
  styleUrls: ['./ratingandwhy.component.scss'],
})
export class RatingandwhyComponent implements OnInit, QuestionTypeInterface {
  rating_value: string | undefined;
  why_value: string | undefined;

  @Input()
  id: string = '';

  @Output()
  answered: EventEmitter<any> = new EventEmitter();

  @Output()
  error: EventEmitter<void> = new EventEmitter();

  constructor(private answerStore: AnswerStoreService) {}

  ngOnInit(): void {
    let answer =
      this.answerStore.answers[QuestionType.RATING_AND_WHY + '#' + this.id];
    this.rating_value = answer?.rating;
    this.why_value = answer?.why;
    this.checkAllValuesPresent();
  }

  validateRatingInput = (e: KeyboardEvent) => {
    const allowedKeystrokes = [
      'backspace',
      'delete',
      'arrowleft',
      'arrowright',
    ];
    const allowedDigits = [...'1234567890'];
    if (allowedKeystrokes.includes(e.code.toLowerCase())) {
      return true;
    }
    if (!allowedDigits.includes(e.key)) {
      return false;
    }
    if (this.rating_value) {
      if (this.rating_value.toString().length <= 1) {
        if (this.rating_value.toString() === '1') {
          if (e.key === '0') {
            return true;
          }
          return false;
        } else {
          this.rating_value = this.rating_value.toString().substr(0, 1);
          return false;
        }
      }
      return false;
    } else {
      if (e.key === '0') {
        return false;
      }
      return true;
    }
  };

  checkAllValuesPresent = () => {
    if (this.rating_value && this.why_value) {
      this.answered.emit({
        qnType: QuestionType.RATING_AND_WHY,
        value: {
          rating: this.rating_value,
          why: this.why_value,
        },
      });
    } else {
      this.error.emit();
    }
  };
}
