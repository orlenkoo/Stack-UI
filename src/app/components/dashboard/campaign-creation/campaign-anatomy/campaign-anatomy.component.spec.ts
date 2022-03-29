import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignAnatomyComponent } from './campaign-anatomy.component';

describe('CampaignAnatomyComponent', () => {
  let component: CampaignAnatomyComponent;
  let fixture: ComponentFixture<CampaignAnatomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignAnatomyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
