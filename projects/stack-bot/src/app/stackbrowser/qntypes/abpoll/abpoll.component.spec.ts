import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbpollComponent } from './abpoll.component';

describe('AbpollComponent', () => {
  let component: AbpollComponent;
  let fixture: ComponentFixture<AbpollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbpollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
