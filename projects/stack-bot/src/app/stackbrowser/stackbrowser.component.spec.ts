import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackbrowserComponent } from './stackbrowser.component';

describe('StackbrowserComponent', () => {
  let component: StackbrowserComponent;
  let fixture: ComponentFixture<StackbrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackbrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
