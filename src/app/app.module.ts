import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackSignupComponent } from './components/stack-signup/stack-signup.component';
import { StackHomeComponent } from './components/stack-home/stack-home.component';
import { StackSignupLandingComponent } from './components/stack-signup-landing/stack-signup-landing.component';
import { StackSignupStartComponent } from './components/stack-signup-start/stack-signup-start.component';
import { StackSignupProfileComponent } from './components/stack-signup-profile/stack-signup-profile.component';
import { StackSignupVerifyComponent } from './components/stack-signup-verify/stack-signup-verify.component';
import { StackSignupDoneComponent } from './components/stack-signup-done/stack-signup-done.component';
import { StackImageCarouselComponent } from './components/stack-image-carousel/stack-image-carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StackBotWrapperComponent } from './wrapper/stack-bot-wrapper/stack-bot-wrapper.component';
import { StackBotModule } from 'projects/stack-bot/src/app/stackbot.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { StackCommonModule } from './components/common/stack-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    StackSignupComponent,
    StackHomeComponent,
    StackSignupLandingComponent,
    StackSignupStartComponent,
    StackSignupProfileComponent,
    StackSignupVerifyComponent,
    StackSignupDoneComponent,
    StackImageCarouselComponent,
    StackBotWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StackBotModule,
    DashboardModule,
    StackCommonModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
