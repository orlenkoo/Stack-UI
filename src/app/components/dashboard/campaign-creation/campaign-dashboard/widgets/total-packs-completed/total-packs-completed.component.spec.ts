import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPacksCompletedComponent } from './total-packs-completed.component';

describe('TotalPacksCompletedComponent', () => {
  let component: TotalPacksCompletedComponent;
  let fixture: ComponentFixture<TotalPacksCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPacksCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPacksCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
