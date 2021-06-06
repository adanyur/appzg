import { TestBed } from '@angular/core/testing';

import { HttpsInterceptor } from './https.interceptors';

describe('HttpService', () => {
  let service: HttpsInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
