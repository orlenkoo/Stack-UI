import { Component, EventEmitter, Output } from '@angular/core';
import { colors } from 'src/app/constants/color.constants';

@Component({
  selector: 'app-account-settings-color-selection',
  templateUrl: './account-settings-color-selection.component.html',
  styleUrls: ['./account-settings-color-selection.component.scss']
})
export class AccountSettingsColorSelectionComponent {
  colors = colors;
  selectedColor = colors[0];

  @Output() onNext: EventEmitter<void> = new EventEmitter();

  onColorSelect(color: { name: string, value: string }): void {
    this.selectedColor = color;
  }

}
