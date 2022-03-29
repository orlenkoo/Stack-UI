import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByGenderComponent } from './customers-by-gender.component';

describe('CustomersByGenderComponent', () => {
  let component: CustomersByGenderComponent;
  let fixture: ComponentFixture<CustomersByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
