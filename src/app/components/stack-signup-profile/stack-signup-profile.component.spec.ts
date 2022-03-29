import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSignupProfileComponent } from './stack-signup-profile.component';

describe('StackSignupProfileComponent', () => {
  let component: StackSignupProfileComponent;
  let fixture: ComponentFixture<StackSignupProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSignupProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSignupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
