import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCompletionComponent } from './campaign-completion.component';

describe('CampaignCompletionComponent', () => {
  let component: CampaignCompletionComponent;
  let fixture: ComponentFixture<CampaignCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignCompletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
