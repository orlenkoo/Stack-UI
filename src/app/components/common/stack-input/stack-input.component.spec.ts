import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackInputComponent } from './stack-input.component';

describe('StackInputComponent', () => {
  let component: StackInputComponent;
  let fixture: ComponentFixture<StackInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
