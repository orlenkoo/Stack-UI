import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignConfigurableComponent } from './campaign-configurable.component';

describe('CampaignConfigurableComponent', () => {
  let component: CampaignConfigurableComponent;
  let fixture: ComponentFixture<CampaignConfigurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignConfigurableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignConfigurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
