import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCardCarouselComponent } from './stack-card-carousel.component';

describe('StackCardCarouselComponent', () => {
  let component: StackCardCarouselComponent;
  let fixture: ComponentFixture<StackCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackCardCarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
