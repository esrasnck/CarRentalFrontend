import { TestBed } from '@angular/core/testing';

import { CustomerdetailService } from './customerdetail.service';

describe('CustomerdetailService', () => {
  let service: CustomerdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
