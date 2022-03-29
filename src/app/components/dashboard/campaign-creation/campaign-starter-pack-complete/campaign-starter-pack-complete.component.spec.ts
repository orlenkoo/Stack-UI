import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStarterPackComponent } from './campaign-starter-pack.component';

describe('CampaignStarterPackComponent', () => {
  let component: CampaignStarterPackComponent;
  let fixture: ComponentFixture<CampaignStarterPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignStarterPackComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStarterPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
