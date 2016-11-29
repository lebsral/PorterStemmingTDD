// /* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// import { PorterstemmingService } from './porterstemming.service';

// describe('Service: Porterstemming', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [PorterstemmingService]
//     });
//   });

//   it('should return a truthy service', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service).toBeTruthy();
//   }));


//   it('should return words that end in ed without the ed...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abandoned')).toBe('abandon');
//     expect(service.stemming('abashed')).toBe('abash');
//     expect(service.stemming('abated')).toBe('abat');
//     expect(service.stemming('abed')).toBe('ab');
//   }));


//   it('should return words that end in s without the s...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abbots')).toBe('abbot');
//   }));

//   it('should return words that end in an e without the e...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abase')).toBe('abas');
//     expect(service.stemming('abate')).toBe('abat');
//     expect(service.stemming('abbe')).toBe('abb');
//   }));

//   it('should return words that end in an ement without the ement...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abatement')).toBe('abat');
//     expect(service.stemming('abattement')).toBe('abatt');
//   }));

//   it('should return words that end in an ements without the ements...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abatements')).toBe('abat');
//   }));

//   it('should return words that end in an es without the es...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abates')).toBe('abat');
//   }));

//     it('should return words that end in an ation without the ation...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abdication')).toBe('abdic');
//   }));

//     it('should return words that end in an ion  without the ion...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abduction')).toBe('abduct');
//   }));

//   it('should return words that end in an y with an i...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abbey')).toBe('abbei');
//   }));

//   it('should return words that end in an ys with an i...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abbeys')).toBe('abbei');
//   }));
//   it('should return words that end in an able without the able...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abbominable')).toBe('abbomin');
//   }));

//   it('should return words that end in an ated without the ated...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('abbreviated')).toBe('abbrevi');
//   }));

//   it('should return words that do not change as the same...', inject([PorterstemmingService], (service: PorterstemmingService) => {
//     expect(service.stemming('a')).toBe('a');
//     expect(service.stemming('aaron')).toBe('aaron');
//     expect(service.stemming('aback')).toBe('aback');
//     expect(service.stemming('abaissiez')).toBe('abaissiez');
//     expect(service.stemming('abandon')).toBe('abandon');
//     expect(service.stemming('abash')).toBe('abash');
//     expect(service.stemming('abbess')).toBe('abbess');
//     expect(service.stemming('abbot')).toBe('abbot');
//     expect(service.stemming('abel')).toBe('abel');
//   }));
// });
