import { TestBed } from '@angular/core/testing';

import { StackBotApiService } from './stack-bot-api.service';

describe('StackBotApiService', () => {
  let service: StackBotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackBotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
