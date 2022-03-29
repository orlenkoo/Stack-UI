import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account-settings-completion',
  templateUrl: './account-settings-completion.component.html',
  styleUrls: ['./account-settings-completion.component.scss']
})
export class AccountSettingsCompletionComponent implements OnInit {
  @Output() onNext: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
