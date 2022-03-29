import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignLogoSelectionComponent } from './campaign-logo-selection.component';

describe('CampaignLogoSelectionComponent', () => {
  let component: CampaignLogoSelectionComponent;
  let fixture: ComponentFixture<CampaignLogoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignLogoSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignLogoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
