import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerStoreService } from '../../../service/answer-store.service';
import { DataStoreService } from '../../../service/data-store.service';
import { Option } from '../option.interface';
import { QuestionType } from '../questionType.enum';

@Component({
  selector: 'app-asl',
  templateUrl: './asl.component.html',
  styleUrls: ['./asl.component.scss'],
})
export class AslComponent implements OnInit {
  gender: string | undefined;
  selectedGender: string | undefined;
  genderOptions: Option[];
  isOpen: boolean = false;
  birthYear: string | undefined;
  postcode: string | undefined;

  theme = this.dataStore.sessionData.theme.toLowerCase();

  @Input()
  id: string = '';

  @Output() answered: EventEmitter<any>;
  @Output()
  error: EventEmitter<void> = new EventEmitter();

  constructor(
    private answerStore: AnswerStoreService,
    private dataStore: DataStoreService
  ) {
    this.genderOptions = [
      {
        id: 1,
        label: 'Female',
        value: 'female',
        interaction: {
          hovered: false,
        },
      },
      {
        id: 2,
        label: 'Male',
        value: 'male',
        interaction: {
          hovered: false,
        },
      },
      {
        id: 3,
        label: 'Non-Binary',
        value: 'non_binary',
        interaction: {
          hovered: false,
        },
      },
      {
        id: 4,
        label: 'Prefer not to say',
        value: 'prefer_not_to_say',
        interaction: {
          hovered: false,
        },
      },
    ];
    this.answered = new EventEmitter();
  }

  ngOnInit(): void {
    let answer = this.answerStore.answers[QuestionType.ASL + '#' + this.id];
    this.gender = answer?.gender;
    this.birthYear = answer?.birthYear;
    this.postcode = answer?.postcode;
    this.checkAllValuesPresent();
  }

  validateYear = (birthYear: string) => {
    let currentYear = new Date().getFullYear();
    if (
      Number(birthYear) > currentYear - 16 ||
      Number(birthYear) < currentYear - 120
    ) {
      return false;
    } else {
      return true;
    }
  };

  validatePostCode = (postCode: string) => {
    if (this.postcode?.length === 6) {
      return true;
    } else {
      return false;
    }
  };

  checkAllValuesPresent = () => {
    if (
      this.gender &&
      this.birthYear &&
      this.validateYear(this.birthYear) &&
      this.postcode &&
      this.validatePostCode(this.postcode)
    ) {
      this.answered.emit({
        qnType: QuestionType.ASL,
        value: {
          gender: this.gender,
          birthYear: this.birthYear,
          postcode: this.postcode,
        },
      });
    } else {
      this.error.emit();
    }
  };

  toggleSelect() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any) {
    this.gender = option.value;
    this.selectedGender = option.label;
    this.toggleSelect();
    this.checkAllValuesPresent();
  }
}
