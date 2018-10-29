import { TestBed, inject } from '@angular/core/testing';

import { TwitsService } from './twits.service';

describe('TwitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitsService]
    });
  });

  it('should be created', inject([TwitsService], (service: TwitsService) => {
    expect(service).toBeTruthy();
  }));
});
