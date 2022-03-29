import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account-settings-logo-selection',
  templateUrl: './account-settings-logo-selection.component.html',
  styleUrls: ['./account-settings-logo-selection.component.scss']
})
export class AccountSettingsLogoSelectionComponent {
  @Output() onNext: EventEmitter<void> = new EventEmitter();

}
