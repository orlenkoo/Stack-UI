import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackImageCarouselComponent } from './stack-image-carousel.component';

describe('StackImageCarouselComponent', () => {
  let component: StackImageCarouselComponent;
  let fixture: ComponentFixture<StackImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackImageCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
