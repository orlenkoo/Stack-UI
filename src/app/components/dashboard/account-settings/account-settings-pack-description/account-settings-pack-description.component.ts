import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-settings-pack-description',
  templateUrl: './account-settings-pack-description.component.html',
  styleUrls: ['./account-settings-pack-description.component.scss']
})
export class AccountSettingsPackDescriptionComponent {
  @Output() onNext = new EventEmitter();
}
