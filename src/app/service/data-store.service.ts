import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private _userData: User = new User();

  constructor() { }

  public get user() {
    return this._userData;
  }
  
  public set user(userObj: User) {
    this._userData = Object.assign({}, this._userData, userObj);
  }

  public resetUserWithData(userObj: User) {
    this._userData = userObj;
  }
}
