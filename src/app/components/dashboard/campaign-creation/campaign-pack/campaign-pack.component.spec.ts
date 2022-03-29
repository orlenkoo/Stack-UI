import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPackComponent } from './campaign-pack.component';

describe('CampaignPackComponent', () => {
  let component: CampaignPackComponent;
  let fixture: ComponentFixture<CampaignPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
