import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { StackCommonModule } from '../../common/stack-common.module';
import { AccountSettingsWelcomeComponent } from './account-settings-welcome/account-settings-welcome.component';
import { AccountSettingsBotComponent } from './account-settings-bot/account-settings-bot.component';
import { AccountSettingsPackDescriptionComponent } from './account-settings-pack-description/account-settings-pack-description.component';
import { AccountSettingsColorSelectionComponent } from './account-settings-color-selection/account-settings-color-selection.component';
import { AccountSettingsLogoSelectionComponent } from './account-settings-logo-selection/account-settings-logo-selection.component';
import { AccountSettingsInstallationComponent } from './account-settings-installation/account-settings-installation.component';
import { AccountSettingsCompletionComponent } from './account-settings-completion/account-settings-completion.component';

const routes: Routes = [
    {
        path: '',
        component: AccountSettingsComponent
    }
];

@NgModule({
    declarations: [
        AccountSettingsComponent,
        AccountSettingsWelcomeComponent,
        AccountSettingsBotComponent,
        AccountSettingsPackDescriptionComponent,
        AccountSettingsColorSelectionComponent,
        AccountSettingsLogoSelectionComponent,
        AccountSettingsInstallationComponent,
        AccountSettingsCompletionComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StackCommonModule
    ], exports: [RouterModule]
})
export class AccountSettingsModule { }
