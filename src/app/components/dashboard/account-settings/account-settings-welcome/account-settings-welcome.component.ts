import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-settings-welcome',
  templateUrl: './account-settings-welcome.component.html',
  styleUrls: ['./account-settings-welcome.component.scss']
})
export class AccountSettingsWelcomeComponent {
  state = 'campagin-description';

  @Input() open = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter();
}
