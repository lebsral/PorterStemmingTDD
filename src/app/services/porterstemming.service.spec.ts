/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PorterstemmingService } from './porterstemming.service';

describe('Service: Porterstemming', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorterstemmingService]
    });
  });

  it('should return a truthy service', inject([PorterstemmingService], (service: PorterstemmingService) => {
    expect(service).toBeTruthy();
  }));


it('should return words that end in ed without the ed...', inject([PorterstemmingService], (service: PorterstemmingService) => {
  expect(service.stemming('abandoned')).toBe('abandon');
  expect(service.stemming('abashed')).toBe('abash');
  expect(service.stemming('abated')).toBe('abat');
}));


it('should return words that end in an e without the e...', inject([PorterstemmingService], (service: PorterstemmingService) => {
  expect(service).toBeTruthy();
  expect(service.stemming('abase')).toBe('abas');
  expect(service.stemming('abate')).toBe('abat');
}));


it('should return words that do not change as the same...', inject([PorterstemmingService], (service: PorterstemmingService) => {
  expect(service).toBeTruthy();
  expect(service.stemming('a')).toBe('a');
  expect(service.stemming('aaron')).toBe('aaron');
  expect(service.stemming('aback')).toBe('aback');
  expect(service.stemming('abaissiez')).toBe('abaissiez');
  expect(service.stemming('abandon')).toBe('abandon');
  expect(service.stemming('abash')).toBe('abash');
}));
});
