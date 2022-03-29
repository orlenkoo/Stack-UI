import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsColorSelectionComponent } from './account-settings-color-selection.component';

describe('AccountSettingsColorSelectionComponent', () => {
  let component: AccountSettingsColorSelectionComponent;
  let fixture: ComponentFixture<AccountSettingsColorSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSettingsColorSelectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsColorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
