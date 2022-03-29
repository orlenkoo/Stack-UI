import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPackSelectionComponent } from './campaign-pack-selection.component';

describe('CampaignPackSelectionComponent', () => {
  let component: CampaignPackSelectionComponent;
  let fixture: ComponentFixture<CampaignPackSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPackSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPackSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
