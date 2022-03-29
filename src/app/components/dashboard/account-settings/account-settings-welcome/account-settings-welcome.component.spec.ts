import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsWelcomeComponent } from './account-settings-welcome.component';

describe('AccountSettingsWelcomeComponent', () => {
  let component: AccountSettingsWelcomeComponent;
  let fixture: ComponentFixture<AccountSettingsWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSettingsWelcomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
