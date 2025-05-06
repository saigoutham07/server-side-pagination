import { TestBed } from '@angular/core/testing';

import { CustomerDetailsFormatService } from './customer-details-format.service';

describe('CustomerDetailsFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerDetailsFormatService = TestBed.get(CustomerDetailsFormatService);
    expect(service).toBeTruthy();
  });
});
