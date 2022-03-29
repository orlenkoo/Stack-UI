import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerStoreService {

  private _answers: {[property: string]: any} = {};

  get answers() {
    return this._answers;
  }

  set answers(val: {[property: string]: any}) {
    this._answers = Object.assign({}, this._answers, val);
  }

  resetAnswers() {
    this._answers = {};
  }

  constructor() { }
}
