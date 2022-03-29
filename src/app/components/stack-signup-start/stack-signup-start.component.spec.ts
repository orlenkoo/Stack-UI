import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSignupStartComponent } from './stack-signup-start.component';

describe('StackSignupStartComponent', () => {
  let component: StackSignupStartComponent;
  let fixture: ComponentFixture<StackSignupStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSignupStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSignupStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
