import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsLogoSelectionComponent } from './account-settings-logo-selection.component';

describe('AccountSettingsLogoSelectionComponent', () => {
  let component: AccountSettingsLogoSelectionComponent;
  let fixture: ComponentFixture<AccountSettingsLogoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSettingsLogoSelectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsLogoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
