import {TestBed, waitForAsync} from '@angular/core/testing';

import {InternalListWordService} from './internal-list-word.service';

describe('InternalListWordService', () => {
  let service: InternalListWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternalListWordService]
    });
    service = TestBed.inject(InternalListWordService);
  });

  it('should give a word from the internal list', waitForAsync(() => {
    service.getWord()
      .then(word => {
        console.log(word);
        expect(service.wordList).toContain(word);
      });
  }));
});
