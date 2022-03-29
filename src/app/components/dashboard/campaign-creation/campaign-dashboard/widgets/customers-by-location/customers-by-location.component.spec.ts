import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByLocationComponent } from './customers-by-location.component';

describe('CustomersByLocationComponent', () => {
  let component: CustomersByLocationComponent;
  let fixture: ComponentFixture<CustomersByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersByLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
