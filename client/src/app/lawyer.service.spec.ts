/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LawyerService } from './lawyer.service';

describe('LawyerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LawyerService]
    });
  });

  it('should ...', inject([LawyerService], (service: LawyerService) => {
    expect(service).toBeTruthy();
  }));
});
