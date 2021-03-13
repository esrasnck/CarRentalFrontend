import { TestBed } from '@angular/core/testing';

import { CardetailService } from './cardetail.service';

describe('CardetailService', () => {
  let service: CardetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
