import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackHomeComponent } from './stack-home.component';

describe('StackHomeComponent', () => {
  let component: StackHomeComponent;
  let fixture: ComponentFixture<StackHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
