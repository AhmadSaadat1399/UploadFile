import { TestBed } from '@angular/core/testing';

import { NOEServiceService } from './noeservice.service';


describe('NOEServiceService', () => {
  let service: NOEServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NOEServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
