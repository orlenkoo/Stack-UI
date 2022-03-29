import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackBotWrapperComponent } from './stack-bot-wrapper.component';

describe('StackBotWrapperComponent', () => {
  let component: StackBotWrapperComponent;
  let fixture: ComponentFixture<StackBotWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackBotWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackBotWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
