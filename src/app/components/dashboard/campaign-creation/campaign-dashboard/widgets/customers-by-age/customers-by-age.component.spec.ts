import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByAgeComponent } from './customers-by-age.component';

describe('CustomersByAgeComponent', () => {
  let component: CustomersByAgeComponent;
  let fixture: ComponentFixture<CustomersByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersByAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
