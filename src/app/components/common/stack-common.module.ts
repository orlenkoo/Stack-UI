import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StackButtonComponent } from './stack-button/stack-button.component';
import { StackInputComponent } from './stack-input/stack-input.component';
import { StackModalComponent } from './stack-modal/stack-modal.component';
import { StackSelectComponent } from './stack-select/stack-select.component';
import { StackDirectivesModule } from '../../directives/stack-directives.module';
import { StackProgressBarComponent } from './stack-progress-bar/stack-progress-bar.component';
import { StackCardComponent } from './stack-card/stack-card.component';
import { StackListComponent } from './stack-list/stack-list.component';
import { StackCardCarouselComponent } from './stack-card-carousel/stack-card-carousel.component';

@NgModule({
  declarations: [StackButtonComponent, StackInputComponent, StackModalComponent, StackSelectComponent, StackProgressBarComponent, StackCardComponent, StackListComponent, StackCardCarouselComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StackDirectivesModule
  ], exports: [StackButtonComponent, StackInputComponent, StackModalComponent, StackSelectComponent, StackProgressBarComponent, StackCardComponent, StackListComponent, StackCardCarouselComponent]
})
export class StackCommonModule { }
