import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { CollectibleInfo } from '../model/stackcard.collectible.info.enum';
import { StackCard } from '../model/stackcard.model';
import { AnswerStoreService } from '../service/answer-store.service';
import { Option } from './qntypes/option.interface';
import { QuestionType } from './qntypes/questionType.enum';
import { StackcardComponent } from './stackcard/stackcard.component';
import Lottie, { AnimationItem } from 'lottie-web';
import { DataStoreService } from '../service/data-store.service';
import { StackBotApiService } from '../service/stack-bot-api.service';
import { LoaderComponent } from '../util/loader/loader.component';
import { EventFactoryService } from '../service/event-factory.service';
import { StackBotEventType } from '../model/event.model';

@Component({
  selector: 'app-stackbrowser',
  templateUrl: './stackbrowser.component.html',
  styleUrls: ['./stackbrowser.component.scss'],
})
export class StackbrowserComponent implements OnInit, AfterViewInit {
  modalLogo = '';
  stackMainLogo = '';
  chevronIcon = '';
  brandLogo = '';
  amountSaved = 0;
  currentCampaignAmount = 0;
  cards: StackCard[] = [];
  activeCard: number = 0;
  stackSelected = false;
  lastQnReached = false;
  disableContinueBtn = true;
  disableBackBtn = true;
  QuestionTypeEnum = QuestionType;
  answeredQnsIndex: number[] = [];
  animation: AnimationItem | undefined;
  availableQns: string[] = [];
  activeCampaignId: string | undefined;
  theme: string | undefined;
  //temp code
  allowedQnTypes: QuestionType[] = [
    QuestionType.SLIDER,
    QuestionType.MULTI_CHOICE,
    QuestionType.RATING_AND_WHY,
    QuestionType.AB_POLL,
    QuestionType.ASL,
    QuestionType.FREE_TEXT,
    QuestionType.MULTI_SELECT,
  ];
  qnIndex = 0;
  activeQn = '';
  stackTitle: string = '';
  activeQnDesc: string = '';
  sliderOptions: any[] = [];
  sliderQuestion: string | undefined;
  abpollOptions: Option[] = [];
  multiChoiceOptions: Option[] = [];
  multiSelectOptions: Option[] = [];
  totalDiscountAvailable = 0;
  baseUrl: string = this.dataStore.baseAssetsUrl;

  @ViewChildren('card') elements: QueryList<StackcardComponent> | undefined;
  @ViewChild('questionloader') qnLoader: LoaderComponent | undefined;
  @ViewChild('cardsHolder') cardHolder: ElementRef | undefined;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  @Output() voucherGenerated: EventEmitter<string> = new EventEmitter();

  constructor(
    private answerStore: AnswerStoreService,
    public dataStore: DataStoreService,
    private stackApi: StackBotApiService,
    private eventFactory: EventFactoryService
  ) {}

  ngOnInit(): void {
    Lottie.setQuality('low');
    // Load lottie animation
    this.animation = Lottie.loadAnimation({
      container: document.getElementById('svg') as HTMLElement,
      path: 'https://assets1.lottiefiles.com/packages/lf20_9Y9DIQ.json',
      renderer: 'svg',
      loop: true,
      autoplay: false,
    });

    this.dataStore.availableCampaigns.forEach((campaign) => {
      this.totalDiscountAvailable += campaign.amountToSave;
      if (campaign.completed) {
        this.amountSaved += campaign.amountToSave;
      }
    });

    this.theme = this.dataStore.theme;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollActiveCardIntoView();
      this.eventFactory.sendEvent(StackBotEventType.APP_LOADED, {
        campaigns: this.dataStore.availableCampaigns,
      });
    }, 50);
  }

  fetchBotIcon() {
    let botIcon = `${this.baseUrl}/bot/coin_${this.theme}.png`;
    return botIcon;
  }

  scrollActiveCardIntoView() {
    if (this.cardHolder) {
      this.cardHolder.nativeElement.style.marginLeft =
        70 + this.activeCard * -247 + 'px';
    }
    /*this.elements?.get(this.activeCard)?.ref.nativeElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });*/
  }

  nextCard() {
    if (this.activeCard < this.dataStore.availableCampaigns.length - 1) {
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

  emitCloseModal = () => {
    this.eventFactory.sendEvent(StackBotEventType.APP_UNLOADED);
    this.closeModal.next(true);
  };

  cardClicked(i: number) {
    this.activeCard = i;
    this.scrollActiveCardIntoView();
  }

  prepareOptions = (choices: any[]) => {
    let options: Option[] = [];
    choices.forEach((choice, index) => {
      let option: Option = {
        id: index,
        interaction: {
          hovered: false,
          clicked: false,
          focused: false,
        },
      };
      option.label = choice.key;
      option.value = choice.value;
      options.push(option);
    });
    return options;
  };

  fetchQnDetails = () => {
    setTimeout(() => {
      this.qnLoader?.showLoader();
    }, 10);
    this.stackApi
      .getQuestion(
        this.dataStore.sessionData.sessionId,
        this.activeCampaignId as string,
        this.availableQns[this.qnIndex]
      )
      .subscribe((questionData) => {
        this.activeQn = questionData.type;
        this.activeQnDesc = questionData.text;
        switch (questionData.type) {
          case QuestionType.MULTI_CHOICE:
            this.multiChoiceOptions = this.prepareOptions(questionData.choices);
            break;
          case QuestionType.MULTI_SELECT:
            this.multiSelectOptions = this.prepareOptions(questionData.choices);
            break;
          case QuestionType.AB_POLL:
            this.abpollOptions = this.prepareOptions(questionData.choices);
            break;
          case QuestionType.SLIDER:
            this.sliderOptions = this.prepareOptions(questionData.choices);
            this.sliderQuestion = questionData.text;
            break;
        }
        this.eventFactory.sendEvent(StackBotEventType.QUESTION_CHANGED, {
          cn: this.activeCampaignId,
          q: this.availableQns[this.qnIndex],
        });
        this.qnLoader?.hideLoader();
      });
  };

  processStack = (stackId: string) => {
    this.stackSelected = true;
    this.dataStore.availableCampaigns.forEach((campaign) => {
      if (campaign.id === stackId) {
        this.currentCampaignAmount = campaign.amountToSave;
        this.activeCampaignId = campaign.id;
        this.availableQns = campaign.questionIds;
        this.stackTitle = campaign.cardTitle as string;
        this.brandLogo = campaign.brandImageUrl as string;
        this.eventFactory.sendEvent(
          StackBotEventType.CAMPAIGN_STARTED,
          stackId
        );
        this.fetchQnDetails();
      }
    });
  };

  resetOptions = () => {
    this.abpollOptions.forEach((opt) => (opt.active = false));
    this.multiSelectOptions.forEach((opt) => (opt.active = false));
    this.multiChoiceOptions.forEach((opt) => (opt.active = false));
  };

  goBackToStack = () => {
    this.stackSelected = false;
    this.activeQn = '';
    this.qnIndex = 0;
    this.lastQnReached = false;
    this.answerStore.resetAnswers();
    // TODO: remove this after integration
    this.resetOptions();
    setTimeout(() => {
      this.scrollActiveCardIntoView();
    }, 10);
  };

  recordAnswer = (data: any) => {
    if (data.qnType) {
      let key = data.qnType + '#' + this.availableQns[this.qnIndex];
      this.answerStore.answers[key as string] = data.value;
      this.disableContinueBtn = false;
    }
  };

  recordErrorInQn = () => {
    this.disableContinueBtn = true;
  };

  sendAnswerProvidedEvent = () => {
    let answer =
      this.answerStore.answers[
        this.activeQn + '#' + this.availableQns[this.qnIndex]
      ];
    switch (this.activeQn) {
      case QuestionType.MULTI_CHOICE:
      case QuestionType.MULTI_SELECT:
        answer = answer.map((a: any) => a.value);
        break;
      case QuestionType.AB_POLL:
      case QuestionType.SLIDER:
        answer = answer.value;
        break;
      case QuestionType.RATING_AND_WHY:
        answer = [answer.rating, answer.why];
        break;
      case QuestionType.ASL:
        answer = [answer.birthyear, answer.gender, answer.postcode];
        break;
    }
    this.eventFactory.sendEvent(StackBotEventType.ANSWER_PROVIDED, {
      cn: this.activeCampaignId,
      q: this.availableQns[this.qnIndex],
      a: answer,
    });
  };

  submitAnswers = () => {
    this.sendAnswerProvidedEvent();
    this.goBackToStack();
    setTimeout(() => {
      this.animation?.goToAndPlay(0, true);
      setTimeout(() => {
        this.animation?.goToAndStop(0, true);
      }, 3000);
    }, 100);
    this.eventFactory.sendEvent(
      StackBotEventType.CAMPAIGN_COMPLETE,
      this.activeCampaignId
    );
    this.stackApi
      .completeSurvey(this.activeCampaignId as string, {
        accountId: this.dataStore.sessionData.accountId,
        sessionId: this.dataStore.sessionData.sessionId,
      })
      .subscribe((res: any) => {
        this.voucherGenerated.next(this.dataStore.sessionData.code);
        this.dataStore.availableCampaigns.forEach((campaign) => {
          if (campaign.id === this.activeCampaignId) {
            this.amountSaved += campaign.amountToSave;
            campaign.completed = true;
          }
        });
        this.eventFactory.sendEvent(StackBotEventType.VOUCHER_UPDATED, {
          v: res.code,
          value: res.discountAmount,
        });
      });
  };

  moveToNextQn = () => {
    this.sendAnswerProvidedEvent();
    if (this.qnIndex < this.availableQns.length - 1) {
      this.answeredQnsIndex.push(this.qnIndex);
      ++this.qnIndex;
      this.fetchQnDetails();
      this.disableContinueBtn = true;
      this.disableBackBtn = false;
      if (this.qnIndex === this.availableQns.length - 1) {
        this.lastQnReached = true;
      }
    }
  };

  moveToPreviousQn = () => {
    this.lastQnReached = false;
    if (this.qnIndex > 0) {
      --this.qnIndex;
      this.fetchQnDetails();
      this.disableContinueBtn = true;
      if (this.qnIndex === 0) {
        this.disableBackBtn = true;
      }
    }
  };

  goToQn = (qnIndexNum: number) => {
    if (this.answeredQnsIndex.indexOf(qnIndexNum) > -1) {
      this.qnIndex = qnIndexNum;
      this.activeQn = this.allowedQnTypes[this.qnIndex];
      if (this.qnIndex === 0) {
        this.disableBackBtn = true;
      }
      if (this.qnIndex === this.allowedQnTypes.length - 1) {
        this.lastQnReached = true;
      }
    }
  };
}
