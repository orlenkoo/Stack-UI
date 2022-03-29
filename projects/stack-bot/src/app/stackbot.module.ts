import 'zone.js';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StackbotComponent } from './stackbot/stackbot.component';
import { StackbrowserComponent } from './stackbrowser/stackbrowser.component';
import { StackcardComponent } from './stackbrowser/stackcard/stackcard.component';
import { MultichoiceComponent } from './stackbrowser/qntypes/multichoice/multichoice.component';
import { SliderComponent } from './stackbrowser/qntypes/slider/slider.component';
import { AslComponent } from './stackbrowser/qntypes/asl/asl.component';
import { FreetextComponent } from './stackbrowser/qntypes/freetext/freetext.component';
import { AbpollComponent } from './stackbrowser/qntypes/abpoll/abpoll.component';
import { RatingandwhyComponent } from './stackbrowser/qntypes/ratingandwhy/ratingandwhy.component';
import { FormsModule } from '@angular/forms';
import { SwipeDirective } from './directive/swipe.directive';
import { ClipboardModule } from 'ngx-clipboard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderComponent } from './util/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    StackbotComponent,
    StackbrowserComponent,
    StackcardComponent,
    MultichoiceComponent,
    SliderComponent,
    AslComponent,
    FreetextComponent,
    AbpollComponent,
    RatingandwhyComponent,
    SwipeDirective,
    LoaderComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ClipboardModule],
  exports: [StackbotComponent, StackbrowserComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [StackbotComponent],
})
export class StackBotModule {
  constructor(private injector: Injector) {
    const stackBotEl = createCustomElement(StackbotComponent, { injector });
    customElements.define('stack-bot', stackBotEl);
  }
}
