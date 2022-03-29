import { Injectable } from '@angular/core';
import { CollectibleInfo } from '../model/stackcard.collectible.info.enum';
import { StackCard } from '../model/stackcard.model';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  theme: string | undefined;
  private _sessionData: any;
  get sessionData() {
    let localSessionStored = sessionStorage.getItem('stack_bot_session');
    if (localSessionStored) {
      this.sessionData = JSON.parse(localSessionStored);
    }
    return this._sessionData;
  }
  set sessionData(data: any) {
    sessionStorage.setItem('stack_bot_session', JSON.stringify(data));
    this._sessionData = data;
  }
  availableCampaigns: StackCard[] = [];
  totalAmountToBeSaved = 0;
  accessToken: string | undefined;
  baseAssetsUrl: string = 'https://dev-ui.api-stackresearch.co/assets/imgs';
  constructor() {}

  mapInfoRequired = (infoReqd: string[]) => {
    let infoReqdArr: CollectibleInfo[] = [];
    infoReqd &&
      infoReqd.forEach((info) => {
        switch (info.toLowerCase()) {
          case 'age':
            infoReqdArr.push(CollectibleInfo.AGE);
            break;
          case 'email':
            infoReqdArr.push(CollectibleInfo.EMAIL);
            break;
          case 'gender':
            infoReqdArr.push(CollectibleInfo.GENDER);
            break;
          case 'postcode':
            infoReqdArr.push(CollectibleInfo.POSTCODE);
            break;
        }
      });
    return infoReqdArr;
  };

  mapStackCardFromCampaignResponse = (
    campaignId: string,
    campaignResponse: any
  ) => {
    let card = new StackCard();
    card.amountToSave = campaignResponse.discountAmount;
    this.totalAmountToBeSaved += Number(campaignResponse.discountAmount);
    card.brandImageUrl = this.sessionData.logo;
    card.cardDescription = campaignResponse.introduction?.description;
    card.cardTitle = campaignResponse.introduction?.title;
    card.completionDescription = campaignResponse.completion?.description;
    card.completionTitle = campaignResponse.completion?.title;
    card.durationForSurvey = campaignResponse.estimatedTime;
    card.id = campaignId;
    card.infoRequired = this.mapInfoRequired(campaignResponse.infoRequired);
    card.questionIds = campaignResponse.questionsIds;
    card.theme = this.sessionData.theme.toLowerCase();
    return card;
  };
}
