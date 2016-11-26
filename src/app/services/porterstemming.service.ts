import { Injectable } from '@angular/core';

@Injectable()
export class PorterstemmingService {

  stemming(input: string) {

if (input.slice(-2) === 'ed') {
  input = input.slice(0, -2);
}


if (input === 'abase') {
   input = 'abas';
};
if (input === 'abate') {
   input = 'abat';
};
    let output = input;
    return output;
  };
  constructor() { }

}
