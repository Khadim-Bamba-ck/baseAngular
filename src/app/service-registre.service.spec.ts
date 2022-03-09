import { TestBed } from '@angular/core/testing';

import { ServiceRegistreService } from './service-registre.service';

describe('ServiceRegistreService', () => {
  let service: ServiceRegistreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegistreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
