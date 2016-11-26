/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PorterstemmingService } from './porterstemming.service';

describe('Service: Porterstemming', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorterstemmingService]
    });
  });

  it('should return words that do not change as the same...', inject([PorterstemmingService], (service: PorterstemmingService) => {
    expect(service).toBeTruthy();
    expect(service.stemming('a')).toBe('a');
    expect(service.stemming('aaron')).toBe('aaron');
    expect(service.stemming('aback')).toBe('aback');
    expect(service.stemming('abaissiez')).toBe('abaissiez');
    expect(service.stemming('abandon')).toBe('abandon');
    expect(service.stemming('abandoned')).toBe('abandon');
  }));
});
