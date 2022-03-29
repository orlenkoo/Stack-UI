import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackbotComponent } from './stackbot.component';

describe('StackbotComponent', () => {
  let component: StackbotComponent;
  let fixture: ComponentFixture<StackbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
