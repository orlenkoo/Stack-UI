import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingandwhyComponent } from './ratingandwhy.component';

describe('RatingandwhyComponent', () => {
  let component: RatingandwhyComponent;
  let fixture: ComponentFixture<RatingandwhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingandwhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingandwhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
