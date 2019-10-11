import { TestBed } from '@angular/core/testing';

import { GebetanService } from './gebetan.service';

describe('GebetanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GebetanService = TestBed.get(GebetanService);
    expect(service).toBeTruthy();
  });
});
