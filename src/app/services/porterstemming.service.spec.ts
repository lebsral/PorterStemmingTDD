/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PorterstemmingService } from './porterstemming.service';

describe('Service: Porterstemming', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorterstemmingService]
    });
  });

  it('should ...', inject([PorterstemmingService], (service: PorterstemmingService) => {
    expect(service).toBeTruthy();
    expect(service.stemming('a')).toBe('a');
    expect(service.stemming('aaron')).toBe('aaron');
    expect(service.stemming('aback')).toBe('aback');
  }));
});
