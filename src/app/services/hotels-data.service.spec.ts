import { TestBed } from '@angular/core/testing';

import { HotelsDataService } from './hotels-data.service';

describe('HotelsDataService', () => {
  let service: HotelsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
