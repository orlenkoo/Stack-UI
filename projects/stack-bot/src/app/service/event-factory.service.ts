import { Injectable } from '@angular/core';
import { StackBotEvent, StackBotEventType } from '../model/event.model';
import { DataStoreService } from './data-store.service';
import { StackBotApiService } from './stack-bot-api.service';

@Injectable({
  providedIn: 'root',
})
export class EventFactoryService {
  constructor(
    private datastore: DataStoreService,
    private api: StackBotApiService
  ) {}

  getEvent = (type: StackBotEventType, optn?: any) => {
    let event = new StackBotEvent();
    event.t = type;
    event.h = event.r = this.datastore.sessionData.accountId;
    event.s = this.datastore.sessionData.sessionId;
    switch (type) {
      case StackBotEventType.APP_LOADED:
        event.opts = optn.campaigns.map((campaign: any) => campaign.id);
        break;
      case StackBotEventType.CAMPAIGN_STARTED:
      case StackBotEventType.CAMPAIGN_COMPLETE:
        event.cn = optn;
        break;
      case StackBotEventType.ANSWER_PROVIDED:
        event.cn = optn.cn;
        event.q = optn.q;
        event.a = optn.a;
        break;
      case StackBotEventType.QUESTION_CHANGED:
        event.cn = optn.cn;
        event.q = optn.q;
        break;
      case StackBotEventType.VOUCHER_GENERATED:
      case StackBotEventType.VOUCHER_COPIED:
        event.v = optn;
        break;
      case StackBotEventType.VOUCHER_UPDATED:
        event.v = optn.v;
        event.opts = [
          {
            value: optn.value,
          },
        ];
        break;
    }
    return event;
  };

  sendEvent = (type: StackBotEventType, optn?: any) => {
    let event = this.getEvent(type, optn);
    this.api.sendEvents(event).subscribe((res) => {
      // console.log(`Event Sent`, event);
    });
  };
}
