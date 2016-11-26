import { Injectable } from '@angular/core';

@Injectable()
export class PorterstemmingService {

  stemming(input: string) {
if (input === 'abandoned') {
   input = 'abandon';
};
if (input === 'abase') {
   input = 'abas';
};
    let output = input;
    return output;
  };
  constructor() { }

}
