import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackButtonComponent } from './stack-button.component';

describe('StackButtonComponent', () => {
  let component: StackButtonComponent;
  let fixture: ComponentFixture<StackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
