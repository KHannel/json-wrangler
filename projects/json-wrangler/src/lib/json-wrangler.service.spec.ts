import { TestBed } from '@angular/core/testing';

import { JsonWranglerService } from './json-wrangler.service';

describe('JsonWranglerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonWranglerService = TestBed.get(JsonWranglerService);
    expect(service).toBeTruthy();
  });
});
