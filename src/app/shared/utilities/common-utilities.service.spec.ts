import { TestBed } from '@angular/core/testing';

import { CommonUtilitiesService } from './common-utilities.service';

describe('CommonUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonUtilitiesService = TestBed.get(CommonUtilitiesService);
    expect(service).toBeTruthy();
  });
});
