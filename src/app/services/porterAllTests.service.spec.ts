/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PorterstemmingService } from './porterstemming.service';
import { Input as input } from './input';
import { Output as output } from './output';

describe('Service: ALL', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorterstemmingService]
    });
  });

    for(let x = 0; x < input.length; x++) {
    test_my_times_ten(input[x], output[x]);
};

  function test_my_times_ten(input, output) {
     it('should return all the words with their stem', inject([PorterstemmingService], (service: PorterstemmingService) => {
      expect(service.stemming(input)).toEqual(output);
 }));
  }
  );
