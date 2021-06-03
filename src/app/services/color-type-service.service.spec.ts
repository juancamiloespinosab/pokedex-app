import { TestBed } from '@angular/core/testing';

import { ColorTypeServiceService } from './color-type-service.service';

describe('ColorTypeServiceService', () => {
  let service: ColorTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
