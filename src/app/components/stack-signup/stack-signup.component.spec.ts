import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSignupComponent } from './stack-signup.component';

describe('StackSignupComponent', () => {
  let component: StackSignupComponent;
  let fixture: ComponentFixture<StackSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
