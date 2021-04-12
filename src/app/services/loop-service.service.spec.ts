import { TestBed } from '@angular/core/testing';

import { LoopServiceService } from './loop-service.service';

describe('LoopServiceService', () => {
  let service: LoopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
