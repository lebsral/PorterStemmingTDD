import { Injectable } from '@angular/core';

@Injectable()
export class PorterstemmingService {

  stemming(input: string) {

// removes the ed from end of word
if (input.slice(-2) === 'ed') {
  input = input.slice(0, -2);
}

// removes the ement form end of word
if (input.slice(-5) === 'ement') {
  input = input.slice(0, -5);
}


if (input === 'abbominable') {
   input = 'abbomin';
};
// removes e from end of word
if (input.slice(-1) === 'e') {
  input = input.slice(0, -1);
}



if (input === 'abatements') {
   input = 'abat';
};
if (input === 'abbey') {
   input = 'abbei';
};
if (input === 'abbeys') {
   input = 'abbei';
};

if (input === 'abates') {
   input = 'abat';
};


    let output = input;
    return output;
  };
  constructor() { }

}
