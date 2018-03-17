import { TestBed, inject } from '@angular/core/testing';

import { FlipserviceService } from './flipservice.service';

describe('FlipserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlipserviceService]
    });
  });

  it('should be created', inject([FlipserviceService], (service: FlipserviceService) => {
    expect(service).toBeTruthy();
  }));
});
