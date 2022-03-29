import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackHomeComponent } from './components/stack-home/stack-home.component';
import { StackSignupDoneComponent } from './components/stack-signup-done/stack-signup-done.component';
import { StackSignupLandingComponent } from './components/stack-signup-landing/stack-signup-landing.component';
import { StackSignupProfileComponent } from './components/stack-signup-profile/stack-signup-profile.component';
import { StackSignupStartComponent } from './components/stack-signup-start/stack-signup-start.component';
import { StackSignupVerifyComponent } from './components/stack-signup-verify/stack-signup-verify.component';
import { StackSignupComponent } from './components/stack-signup/stack-signup.component';
import { StackBotWrapperComponent } from './wrapper/stack-bot-wrapper/stack-bot-wrapper.component';

const routes: Routes = [
  {
    path: 'signup',
    component: StackSignupComponent,
    children: [
      {
        path: '',
        component: StackSignupLandingComponent
      },
      {
        path: 'start',
        component: StackSignupStartComponent
      },
      {
        path: 'profile',
        component: StackSignupProfileComponent
      },
      {
        path: 'verify',
        component: StackSignupVerifyComponent
      },
      {
        path: 'done',
        component: StackSignupDoneComponent
      }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'bot',
    component: StackBotWrapperComponent
  },
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
