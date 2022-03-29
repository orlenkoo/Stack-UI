import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';

import { StackCommonModule } from '../../common/stack-common.module';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignPackSelectionComponent } from './campaign-pack-selection/campaign-pack-selection.component';
import { CampaignPackComponent } from './campaign-pack/campaign-pack.component';
import { CampaignColorSelectionComponent } from './campaign-color-selection/campaign-color-selection.component';
import { CampaignLogoSelectionComponent } from './campaign-logo-selection/campaign-logo-selection.component';
import { CampaignSummaryComponent } from './campaign-summary/campaign-summary.component';
import { CampaignCompletionComponent } from './campaign-completion/campaign-completion.component';
import { CampaignAnatomyComponent } from './campaign-anatomy/campaign-anatomy.component';
import { CampaignHandicraftedComponent } from './campaign-handicrafted/campaign-handicrafted.component';
import { CampaignConfigurableComponent } from './campaign-configurable/campaign-configurable.component';
import { CampaignStarterPackComponent } from './campaign-starter-pack/campaign-starter-pack.component';
import { CampaignStarterPackConfigureComponent } from './campaign-starter-pack-configure/campaign-starter-pack-configure.component';
import { CampaignStarterPackCompleteComponent } from './campaign-starter-pack-complete/campaign-starter-pack-complete.component';
import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';
import { TotalParticipantsComponent } from './campaign-dashboard/widgets/total-participants/total-participants.component';
import { TotalPacksCompletedComponent } from './campaign-dashboard/widgets/total-packs-completed/total-packs-completed.component';
import { TotalQuestionsAnsweredComponent } from './campaign-dashboard/widgets/total-questions-answered/total-questions-answered.component';
import { CustomersByAgeComponent } from './campaign-dashboard/widgets/customers-by-age/customers-by-age.component';
import { CustomersByLocationComponent } from './campaign-dashboard/widgets/customers-by-location/customers-by-location.component';
import { CustomersByGenderComponent } from './campaign-dashboard/widgets/customers-by-gender/customers-by-gender.component';

const routes: Routes = [
    {
        path: '',
        component: CampaignComponent
    }
];

@NgModule({
    declarations: [
        CampaignComponent,
        CampaignCreateComponent,
        CampaignPackSelectionComponent,
        CampaignPackComponent,
        CampaignColorSelectionComponent,
        CampaignLogoSelectionComponent,
        CampaignSummaryComponent,
        CampaignCompletionComponent,
        CampaignAnatomyComponent,
        CampaignHandicraftedComponent,
        CampaignConfigurableComponent,
        CampaignStarterPackComponent,
        CampaignStarterPackConfigureComponent,
        CampaignStarterPackCompleteComponent,
        CampaignDashboardComponent,
        TotalParticipantsComponent,
        TotalPacksCompletedComponent,
        TotalQuestionsAnsweredComponent,
        CustomersByAgeComponent,
        CustomersByLocationComponent,
        CustomersByGenderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StackCommonModule,
        MatIconModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatCardModule,
        ChartsModule
    ], exports: [RouterModule, CampaignCreateComponent]
})
export class CampaignCreationModule { }
