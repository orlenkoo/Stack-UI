import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSignupLandingComponent } from './stack-signup-landing.component';

describe('StackSignupLandingComponent', () => {
  let component: StackSignupLandingComponent;
  let fixture: ComponentFixture<StackSignupLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSignupLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSignupLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
