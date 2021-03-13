import { TestBed } from '@angular/core/testing';

import { RentaldetailService } from './rentaldetail.service';

describe('RentaldetailService', () => {
  let service: RentaldetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentaldetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
