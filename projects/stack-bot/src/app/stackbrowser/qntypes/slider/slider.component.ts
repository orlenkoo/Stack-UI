import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { QuestionType } from '../questionType.enum';
import { Option } from '../option.interface';
import { DataStoreService } from '../../../service/data-store.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() options: Option[] = [];
  @Input() question: string | undefined;

  @Output() answered: EventEmitter<any>;

  @ViewChild('slider') slider: ElementRef | undefined;

  value: number = 0;
  selectedLabel: string | undefined;
  theme: string = this.dataStore.sessionData.theme.toLowerCase();

  themeMap: { [themeName: string]: { color: string; value: number }[] } = {
    bondi_blue: [
      {
        color: '395a82',
        value: 0,
      },
      {
        color: '4789ba',
        value: 49.5,
      },
      {
        color: '4fcaff',
        value: 100,
      },
    ],
    navy: [
      {
        color: '395a82',
        value: 0,
      },
      {
        color: '4789ba',
        value: 49.5,
      },
      {
        color: '4fcaff',
        value: 100,
      },
    ],
    surry_sunset: [
      {
        color: 'cd5e6d',
        value: 0,
      },
      {
        color: 'ffb164',
        value: 100,
      },
    ],
    melbourne_moonlight: [
      {
        color: '1e2640',
        value: 0,
      },
      {
        color: '395a82',
        value: 47.4,
      },
      {
        color: '4789ba',
        value: 99.99,
      },
      {
        color: '4fcaff',
        value: 100,
      },
    ],
    very_berry: [
      {
        color: '1e2640',
        value: 0,
      },
      {
        color: '654572',
        value: 0.01,
      },
      {
        color: 'ab5b89',
        value: 50.7,
      },
      {
        color: 'ff7e8e',
        value: 100,
      },
    ],
  };

  constructor(private dataStore: DataStoreService) {
    this.answered = new EventEmitter();
  }

  ngOnInit(): void {
    this.value = Math.ceil(this.options.length / 2);
  }

  ngAfterViewInit(): void {
    /**
     * Adding settime out to eradicate
     * ExpressionChangedAfterItHasBeenCheckedError
     */
    setTimeout(() => {
      this.adjustSlider();
      this.emitAnswer();
    }, 1);
  }

  inputChanged(event: any) {
    this.value = Number(event.target.value);
    this.adjustSlider();
    this.emitAnswer();
  }

  generateGradient = (val: number) => {
    let gradient = `linear-gradient(to right`;
    let selectedTheme = this.themeMap[this.theme];
    selectedTheme.some((colorObj) => {
      if (colorObj.value < val) {
        gradient += `, #${colorObj.color} ${colorObj.value}%`;
      } else {
        gradient += `, #${colorObj.color} ${val}%, #c4c4c4 ${val}%)`;
        return true;
      }
      return false;
    });
    return gradient;
  };

  adjustSlider() {
    const element = this.slider?.nativeElement;
    const min = element.min;
    const max = element.max;
    const val = ((this.value - min) / (max - min)) * 100;
    element.style.background = this.generateGradient(val);
    const option = this.options.find((opt) => opt.id === this.value - 1);
    this.selectedLabel = option?.value;
  }

  emitAnswer() {
    const option = this.options.find((opt) => opt.id === this.value - 1);
    this.answered.emit({
      qnType: QuestionType.SLIDER,
      value: option,
    });
  }

  getMargin = (i: number, options: any[]) => {
    return (i / (options.length - 1)) * 100 + '%';
  };
}
