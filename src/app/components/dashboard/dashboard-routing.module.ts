import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign-creation/campaign/campaign.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'campaign',
        component: CampaignComponent,
        loadChildren: () => import('./campaign-creation/campaign-creation.module').then(m => m.CampaignCreationModule)

      },
      {
        path: 'settings',
        loadChildren: () => import('./account-settings/account-settings.module').then(m => m.AccountSettingsModule)
      },
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
