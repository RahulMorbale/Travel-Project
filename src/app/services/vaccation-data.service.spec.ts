import { TestBed } from '@angular/core/testing';

import { VaccationDataService } from './vaccation-data.service';

describe('VaccationDataService', () => {
  let service: VaccationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
