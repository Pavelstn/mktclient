import { TestBed, inject } from '@angular/core/testing';

import { MainpageService } from './mainpage.service';

describe('MainpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainpageService]
    });
  });

  it('should be created', inject([MainpageService], (service: MainpageService) => {
    expect(service).toBeTruthy();
  }));
});
