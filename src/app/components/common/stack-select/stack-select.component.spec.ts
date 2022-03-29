import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSelectComponent } from './stack-select.component';

describe('StackSelectComponent', () => {
  let component: StackSelectComponent;
  let fixture: ComponentFixture<StackSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
