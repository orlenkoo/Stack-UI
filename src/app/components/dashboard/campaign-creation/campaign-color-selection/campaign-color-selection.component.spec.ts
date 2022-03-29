import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignColorSelectionComponent } from './campaign-color-selection.component';

describe('CampaignColorSelectionComponent', () => {
  let component: CampaignColorSelectionComponent;
  let fixture: ComponentFixture<CampaignColorSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignColorSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignColorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
