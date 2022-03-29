import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';

import { StackCommonModule } from '../../common/stack-common.module';
import { CampaignCreationModule } from '../campaign-creation/campaign-creation.module';
import { HomeComponent } from './home/home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { QuestionAnswerComponent } from './home-dashboard/widgets/question-answer/question-answer.component';
import { NpsComponent } from './home-dashboard/widgets/nps/nps.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    HomeDashboardComponent,
    QuestionAnswerComponent,
    NpsComponent
  ],
  imports: [
    CommonModule,
    StackCommonModule,
    CampaignCreationModule,
    MatTableModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeModule { }
