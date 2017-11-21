import { TestBed, inject } from '@angular/core/testing';

import { MyLocalStorage } from './my-local-storage.service';

describe('MyLocalStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLocalStorage]
    });
  });

  it('should be created', inject([MyLocalStorage], (service: MyLocalStorage) => {
    expect(service).toBeTruthy();
  }));
});
