import { TestBed } from '@angular/core/testing';

import { HomeTimeService } from './home-time.service';

describe('HomeTimeService', () => {
  let service: HomeTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
