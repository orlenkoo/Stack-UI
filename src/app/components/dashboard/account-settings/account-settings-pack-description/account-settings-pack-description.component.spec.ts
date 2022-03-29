import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsPackDescriptionComponent } from './account-settings-pack-description.component';

describe('AccountSettingsPackDescriptionComponent', () => {
  let component: AccountSettingsPackDescriptionComponent;
  let fixture: ComponentFixture<AccountSettingsPackDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSettingsPackDescriptionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsPackDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
