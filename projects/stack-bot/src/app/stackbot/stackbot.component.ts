import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { StackBotEventType } from '../model/event.model';
import { DataStoreService } from '../service/data-store.service';
import { EventFactoryService } from '../service/event-factory.service';
import { StackBotApiService } from '../service/stack-bot-api.service';
import { Option } from '../stackbrowser/qntypes/option.interface';
import { LoaderComponent } from '../util/loader/loader.component';

@Component({
  selector: 'app-stackbot',
  templateUrl: './stackbot.component.html',
  styleUrls: ['./stackbot.component.scss'],
})
export class StackbotComponent implements OnInit, AfterViewInit {
  @ViewChild('botloader') botLoader: LoaderComponent | undefined;

  @Input() theme: string = 'light';
  @Input() themeColor: string = 'blue';
  isStackBrowserOpen = false;
  botHide = false;
  @Input() botContent = '';
  botMsgs: { title: string; body: string }[] = [];
  vouchercode: string | undefined;
  codeCopied = false;
  baseUrl: string = this.dataStore.baseAssetsUrl;
  clipboardIcon: string = `${this.baseUrl}/Clipboard.png`;
  showFeedback = false;
  feedbackOptions: Option[] = [
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: false,
    },
    {
      id: 4,
      active: false,
    },
    {
      id: 5,
      active: false,
    },
  ];

  constructor(
    private stackApi: StackBotApiService,
    private dataStore: DataStoreService,
    private clipboardService: ClipboardService,
    private eventFactory: EventFactoryService
  ) {}

  setupBot = () => {
    this.stackApi.getTokenFromShopify().subscribe((res: any) => {
      this.dataStore.accessToken = res.access_token;
      if (!this.dataStore.sessionData) {
        this.getSession();
      } else {
        this.processSession(this.dataStore.sessionData);
      }
    });
  };

  getSession() {
    this.stackApi.getSession().subscribe((res) => {
      this.processSession(res);
    });
  }

  processSession = (res: any) => {
    this.theme = res.mode.toLowerCase();
    switch (res.theme.toLowerCase()) {
      case 'very_berry':
        this.themeColor = 'pink';
        break;
      case 'bondi_blue':
      case 'navy':
        this.themeColor = 'blue';
        break;
      case 'surry_sunset':
        this.themeColor = 'orange';
        break;
      case 'melbourne_moonlight':
        this.themeColor = 'white';
        break;
    }
    this.dataStore.sessionData = res;
    this.eventFactory.sendEvent(
      StackBotEventType.VOUCHER_GENERATED,
      this.dataStore.sessionData.code.toUpperCase()
    );
    if (!res.campaignIds || res.campaignIds.length === 0) {
      this.eventFactory.sendEvent(StackBotEventType.BOT_HIDDEN);
      this.botHide = true;
    }
    let campaignResponsesRecieved = 0;
    res.campaignIds.forEach((campaignId: string) => {
      this.stackApi
        .getCampaign(res.sessionId, campaignId)
        .subscribe((campaignRes) => {
          campaignResponsesRecieved++;
          this.dataStore.availableCampaigns.push(
            this.dataStore.mapStackCardFromCampaignResponse(
              campaignId,
              campaignRes
            )
          );
          this.botContent = `SAVE $${this.dataStore.totalAmountToBeSaved}`;
          if (campaignResponsesRecieved === res.campaignIds.length) {
            this.eventFactory.sendEvent(StackBotEventType.BOT_SHOWN);
          }
          this.botLoader?.hideLoader();
          this.botHide = false;
        });
    });
  };

  //TODO Event STACK BOT PILL SHOWN

  ngOnInit(): void {
    this.dataStore.theme = this.theme;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.botLoader?.showLoader();
      this.botHide = true;
    }, 20);
    this.setupBot();
  }

  fetchBotIcon() {
    let botIcon = `${this.baseUrl}/bot/coin_${this.theme}.png`;
    return botIcon;
  }

  fetchStarIcon(isActive?: boolean) {
    let filled = isActive ? '_filled' : '';
    let starIcon = `${this.baseUrl}/bot/star${filled}_${this.theme}.png`;
    return starIcon;
  }

  fetchCrossIcon() {
    let botIcon = `${this.baseUrl}/bot/cross_${this.theme}.png`;
    return botIcon;
  }

  fetchClipboardIcon() {
    let done = '';
    if (this.codeCopied) {
      done = '_done';
    }
    let clipboardIcon = `${this.baseUrl}/bot/clipboard${done}_${this.theme}.png`;
    return clipboardIcon;
  }

  toggleStackBrowser = () => {
    this.eventFactory.sendEvent(StackBotEventType.BOT_CLICKED);
    if (this.isStackBrowserOpen) {
      this.eventFactory.sendEvent(StackBotEventType.APP_UNLOADED);
    }
    this.isStackBrowserOpen = !this.isStackBrowserOpen;
  };

  recordVoucherCode = (voucherCode: string) => {
    this.vouchercode = voucherCode;
  };

  copyCoupon = () => {
    this.eventFactory.sendEvent(
      StackBotEventType.VOUCHER_COPIED,
      this.vouchercode
    );
    this.clipboardService.copy(this.vouchercode as string);
    this.codeCopied = true;
    this.clipboardIcon = '';
  };

  activateStar(option: Option) {
    for (let i = 0; i < this.feedbackOptions.length; i++) {
      this.feedbackOptions[i].active =
        this.feedbackOptions[i].id <= option.id ? true : false;
    }
  }
}
