import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StackBotEvent } from '../model/event.model';
import { DataStoreService } from './data-store.service';
import { MockResponse } from './mock-response';

@Injectable({
  providedIn: 'root',
})
export class StackBotApiService {
  mockToken = false;
  mockResponse = false;
  baseURI = 'https://dev-api.api-stackresearch.co';
  constructor(private http: HttpClient, private dataStore: DataStoreService) {}

  getSession() {
    if (this.mockResponse) {
      return of(MockResponse.SESSIONS_RESPONSE);
    } else {
      return this.http.get<any>(`${this.baseURI}/sessions`);
    }
  }

  getCampaign(sessionId: string, campaignId: string) {
    if (this.mockResponse) {
      let response = {};
      switch (campaignId) {
        case 'c_0':
          response = MockResponse.CAMPAIGN_RESPONSE;
          break;
        case 'c_1':
          response = MockResponse.CAMPAIGN_RESPONSE_1;
          break;
        case 'c_2':
          response = MockResponse.CAMPAIGN_RESPONSE_2;
          break;
        default:
          response = MockResponse.CAMPAIGN_RESPONSE_NEW;
          break;
      }
      return of(response);
    } else {
      return this.http.get<any>(
        `${this.baseURI}/sessions/${sessionId}/campaigns/${campaignId}`
      );
    }
  }

  sendEvents(data: StackBotEvent) {
    return this.http.post(`${this.baseURI}/sessions/${data.s}/events`, data);
  }

  getQuestion(sessionId: string, campaignId: string, questionId: string) {
    if (this.mockResponse) {
      let response = {};
      switch (questionId) {
        case 'multiselect':
          response = MockResponse.MULTISELECT_RESPONSE_WITH_OTHER;
          break;
        case 'multichoice':
          response = MockResponse.MULTICHOICE_RESPONSE;
          break;
        case 'asl':
          response = MockResponse.ASL_RESPONSE;
          break;
        case 'slider':
          response = MockResponse.SLIDER_RESPONSE;
          break;
        case 'abpoll':
          response = MockResponse.ABPOLL_RESPONSE;
          break;
        case 'ratingandwhy':
          response = MockResponse.RATINGANDWHY_RESPONSE;
          break;
        case 'freetext':
          response = MockResponse.FREETEXT_RESPONSE;
          break;
      }
      return of(response);
    } else {
      return this.http.get<any>(
        `${this.baseURI}/sessions/${sessionId}/campaigns/${campaignId}/questions/${questionId}`
      );
    }
  }

  getTokenFromShopify() {
    if (this.mockToken) {
      return of({
        access_token:
          'eyJraWQiOiIwVzI5UCtFMm4xU1NldnhNME1hSUNQMzRMRnBZU0U4RzFZcTczSzUrUTRzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYWxyZjgzaGVjOWY3amVkdnJlYTk0cThhOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic3RhY2stZGV2XC9hcGkuc2Vzc2lvbiIsImF1dGhfdGltZSI6MTYzNTE5NDgxNiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX2puOFp1MUt3dSIsImV4cCI6MTYzNTE5ODQxNiwiaWF0IjoxNjM1MTk0ODE2LCJ2ZXJzaW9uIjoyLCJqdGkiOiI2YzI1YmEzYy00Njc3LTQ5MWYtODM0OS0yN2Q3YzFlOWQwZWMiLCJjbGllbnRfaWQiOiIzYWxyZjgzaGVjOWY3amVkdnJlYTk0cThhOCJ9.rq5qSpdEB7kjeSQwLhCdTavTAV-tkWSorgD6JFoyXtnN8qXVe1RmLij1aMyI-0kc2OvS5m1by8-zAwoUGm6giLTetneug3GZO45LFGcuoKms9gb8QeABzgvj6eQNBX3rsCTf2Dqh6DKyg-D_ar3Mfi7oQTjx632azidjGq5uK-CaMJnLQhvUQnGDhY9VAnjeWAfE072RBNn3hruD6D-THNSQmRF3mhYeh3MY5Jbuh0evkeBBFoRzs6enNRMyhHFntLMbhu7eZCRTDrQHXoRNBiXqhkW_mangN65PrjnINQWa8m_4NhIYi-NQi5K23l13YlC2kMedUvW2oFZULe7NZA',
        expires_in: 3600,
        token_type: 'Bearer',
      });
    } else {
      return this.http.get('/a/sb/token');
    }
  }

  completeSurvey(campaignId: string, payload: any) {
    if (this.mockToken) {
      return of({ code: 'afZ212', discountAmount: 3 });
    } else {
      return this.http.post(
        `/a/sb/campaigns/${campaignId}/events/complete`,
        payload
      );
    }
  }
}
