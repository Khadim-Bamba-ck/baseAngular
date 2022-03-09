import { TestBed } from '@angular/core/testing';

import { PrincipaleService } from './principale.service';

describe('PrincipaleService', () => {
  let service: PrincipaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
