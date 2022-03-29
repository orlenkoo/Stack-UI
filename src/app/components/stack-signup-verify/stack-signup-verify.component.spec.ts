import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSignupVerifyComponent } from './stack-signup-verify.component';

describe('StackSignupVerifyComponent', () => {
  let component: StackSignupVerifyComponent;
  let fixture: ComponentFixture<StackSignupVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSignupVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSignupVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
