import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignHandicraftedComponent } from './campaign-handicrafted.component';

describe('CampaignHandicraftedComponent', () => {
  let component: CampaignHandicraftedComponent;
  let fixture: ComponentFixture<CampaignHandicraftedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignHandicraftedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignHandicraftedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
