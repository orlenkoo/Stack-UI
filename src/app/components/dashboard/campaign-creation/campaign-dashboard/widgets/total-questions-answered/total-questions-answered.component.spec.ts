import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalQuestionsAnsweredComponent } from './total-questions-answered.component';

describe('TotalQuestionsAnsweredComponent', () => {
  let component: TotalQuestionsAnsweredComponent;
  let fixture: ComponentFixture<TotalQuestionsAnsweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalQuestionsAnsweredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalQuestionsAnsweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
