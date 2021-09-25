import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {WordService} from "../word.service";

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: WordService, useValue: {getWord: () => "abc"}}
      ]
    });
    service = TestBed.inject(GameService);
    service.initialize();
  });

  it('should be initialized', () => {
    expect(service.word$.getValue()).toEqual('___');
  });

  it('should accept a correct letter', () => {
    service.guessLetter('b');
    expect(service.word$.getValue()).toEqual('_b_');
  });

  it('should not accept a wrong letter', () => {
    service.guessLetter('x');
    expect(service.word$.getValue()).toEqual('___');
  });
});
