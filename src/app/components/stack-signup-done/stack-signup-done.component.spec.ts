import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSignupDoneComponent } from './stack-signup-done.component';

describe('StackSignupDoneComponent', () => {
  let component: StackSignupDoneComponent;
  let fixture: ComponentFixture<StackSignupDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSignupDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSignupDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
