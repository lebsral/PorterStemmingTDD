/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PorterstemmingService } from './porterstemming.service';

describe('Service: ALL', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorterstemmingService]
    });
  });

  let input = [
      'zodiacs', 'zounds'
      ];
  let output = [
      'zodiac', 'zound'
      ];

    for(let x = 0; x < input.length; x++) {
    test_my_times_ten(input[x], output[x]);
};

  function test_my_times_ten(input, output) {
     it('should return words that end in an ion  without the ion...', inject([PorterstemmingService], (service: PorterstemmingService) => {
      expect(service.stemming(input)).toEqual(output);
 }));
  });
