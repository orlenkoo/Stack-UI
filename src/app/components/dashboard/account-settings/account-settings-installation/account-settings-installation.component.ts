import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-settings-installation',
  templateUrl: './account-settings-installation.component.html',
  styleUrls: ['./account-settings-installation.component.scss']
})
export class AccountSettingsInstallationComponent {
  @Output() onNext = new EventEmitter();
}
