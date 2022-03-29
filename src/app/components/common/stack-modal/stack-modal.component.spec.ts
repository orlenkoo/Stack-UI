import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackModalComponent } from './stack-modal.component';

describe('StackModalComponent', () => {
  let component: StackModalComponent;
  let fixture: ComponentFixture<StackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
