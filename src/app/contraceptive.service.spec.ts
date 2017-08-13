import { TestBed, inject } from '@angular/core/testing';
import { ContraceptiveService } from './contraceptive.service';

describe('ContraceptiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContraceptiveService]
    });
  });

  it('should ...', inject([ContraceptiveService], (service: ContraceptiveService) => {
    expect(service).toBeTruthy();
  }));
});
