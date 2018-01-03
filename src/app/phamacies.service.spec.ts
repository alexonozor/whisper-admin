import { TestBed, inject } from '@angular/core/testing';
import { PhamaciesService } from './phamacies.service';

describe('PhamaciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhamaciesService]
    });
  });

  it('should ...', inject([PhamaciesService], (service: PhamaciesService) => {
    expect(service).toBeTruthy();
  }));
});
