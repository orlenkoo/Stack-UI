import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-settings-bot',
  templateUrl: './account-settings-bot.component.html',
  styleUrls: ['./account-settings-bot.component.scss']
})
export class AccountSettingsBotComponent {
  @Output() onNext = new EventEmitter();
}
