import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackcardComponent } from './stackcard.component';

describe('StackcardComponent', () => {
  let component: StackcardComponent;
  let fixture: ComponentFixture<StackcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
