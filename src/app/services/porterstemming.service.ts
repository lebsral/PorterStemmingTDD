import { Injectable } from '@angular/core';

@Injectable()
export class PorterstemmingService {

  stemming(input: string) {

// removes the ed from end of word
if (input.slice(-2) === 'ed') {
  input = input.slice(0, -2);
}

if (input.slice(-5) === 'ement') {
  input = input.slice(0, -5);
}



if (input === 'abatements') {
   input = 'abat';
};
if (input === 'abates') {
   input = 'abat';
};


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
