import { TestBed } from '@angular/core/testing';

import { InternalListWordService } from './internal-list-word.service';

describe('InternalListWordService', () => {
  let service: InternalListWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalListWordService);
  });

  it('should give a word from the internal list', () => {
    const word = service.getWord();
    console.log(word);
    expect(service.wordList).toContain(word);
  });
});
