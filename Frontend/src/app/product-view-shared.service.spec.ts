import { TestBed } from '@angular/core/testing';

import { ProductViewSharedService } from './product-view-shared.service';

describe('ProductViewSharedService', () => {
  let service: ProductViewSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductViewSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
