import { TestBed } from '@angular/core/testing';

import { AnswerStoreService } from './answer-store.service';

describe('AnswerStoreService', () => {
  let service: AnswerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
