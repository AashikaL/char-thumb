import { TestBed } from '@angular/core/testing';

import { CharThumbService } from './char-thumb.service';

describe('CharThumbService', () => {
  let service: CharThumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharThumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
