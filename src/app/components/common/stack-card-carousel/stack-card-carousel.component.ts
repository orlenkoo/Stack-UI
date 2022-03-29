import { AfterViewInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { BotPNGDataURI } from '../../../svgs/bot.pngs';
import { StackCardComponent } from '../stack-card/stack-card.component';

interface Stack {
  id: string | number;
  brandImageUrl: string | undefined;
  amountToSave: number;
  durationForSurvey: number;
  cardTitle: string | undefined;
  cardDescription: string | undefined;
  completionTitle: string | undefined;
  completionDescription: string | undefined;
  infoRequired: String[];
  questionIds: string[];
  completed: boolean;
  theme: string;
}
@Component({
  selector: 'app-stack-card-carousel',
  templateUrl: './stack-card-carousel.component.html',
  styleUrls: ['./stack-card-carousel.component.scss']
})
export class StackCardCarouselComponent implements AfterViewInit {
  timeIcon = BotPNGDataURI.ModalIcon.time;
  activeCard: number = 0;
  baseUrl: string = 'http://dev-ui.api-stackresearch.co/assets/imgs';

  @ViewChildren('card') elements: QueryList<StackCardComponent> | undefined;

  @Input() packs = [];
  @Input() background: string = '';

  nextCard() {
    if (this.activeCard < this.packs.length - 1) {
      this.activeCard++;
      setTimeout(() => {
        this.scrollActiveCardIntoView();
      }, 50);
    }
  }

  previousCard() {
    if (this.activeCard > 0) {
      this.activeCard--;
      setTimeout(() => {
        this.scrollActiveCardIntoView();
      }, 50);
    }
  }

  ngAfterViewInit(): void {
    this.scrollActiveCardIntoView();
  }


  cardClicked(i: number) {
    this.activeCard = i;
    this.scrollActiveCardIntoView();
  }

  scrollActiveCardIntoView() {
    this.elements?.get(this.activeCard)?.ref.nativeElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }


}
