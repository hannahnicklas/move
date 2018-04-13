import { TestBed, inject } from '@angular/core/testing';

import { UniversityService } from './university.service';

describe('UniversityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversityService]
    });
  });

  it('should be created', inject([UniversityService], (service: UniversityService) => {
    expect(service).toBeTruthy();
  }));
});
