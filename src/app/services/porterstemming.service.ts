import { Injectable } from '@angular/core';

@Injectable()
export class PorterstemmingService {

  stemming(input: string) {


// abbess returns itself
if ( input === 'abbess') {
  return input;
}

// removes the ated from end of word
// if (input.slice(-4) === 'ated') {
//   input = input.slice(0, -4);
// }


// removes s from end of word
if (input.slice(-2) === 'ss') {
  input = input.slice(0, -2);
}

// removes s from end of word
if (input.slice(-1) === 's') {
  input = input.slice(0, -1);
}


// removes the ement form end of word
if (input.slice(-5) === 'ement') {
  input = input.slice(0, -5);
}

// removes the ement form end of word
if (input.slice(-6) === 'ements') {
  input = input.slice(0, -6);
}

// removes the able form end of word
if (input.slice(-4) === 'able') {
  input = input.slice(0, -4);
}

// removes the ated form end of word
if (input.slice(-4) === 'ated') {
  input = input.slice(0, -4);
}

// removes the ed from end of word
if (input.slice(-2) === 'ed') {
  input = input.slice(0, -2);
}


// replace y from end of word
if (input.slice(-1) === 'y') {
  input = input.slice(0, -1);
  input = input + 'i';
}

// removes e from end of word
if (input.slice(-1) === 'e') {
  input = input.slice(0, -1);
};



    let output = input;
    return output;
  };
  constructor() { }

}
