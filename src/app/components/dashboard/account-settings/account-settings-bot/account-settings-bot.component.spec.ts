import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsBotComponent } from './account-settings-bot.component';

describe('AccountSettingsBotComponent', () => {
  let component: AccountSettingsBotComponent;
  let fixture: ComponentFixture<AccountSettingsBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSettingsBotComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
