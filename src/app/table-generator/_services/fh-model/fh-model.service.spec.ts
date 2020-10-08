/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FhModelService } from './fh-model.service';

describe('Service: FhModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FhModelService]
    });
  });

  it('should ...', inject([FhModelService], (service: FhModelService) => {
    expect(service).toBeTruthy();
  }));
});
