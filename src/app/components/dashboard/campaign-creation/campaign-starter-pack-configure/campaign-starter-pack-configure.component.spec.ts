import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStarterPackConfigureComponent } from './campaign-starter-pack-configure.component';

describe('CampaignStarterPackConfigureComponent', () => {
  let component: CampaignStarterPackConfigureComponent;
  let fixture: ComponentFixture<CampaignStarterPackConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignStarterPackConfigureComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStarterPackConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
