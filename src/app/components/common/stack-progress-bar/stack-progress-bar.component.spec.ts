import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackProgressBarComponent } from './stack-progress-bar.component';

describe('StackProgressBarComponent', () => {
  let component: StackProgressBarComponent;
  let fixture: ComponentFixture<StackProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
