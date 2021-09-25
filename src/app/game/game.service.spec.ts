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
    service.initialize(3);
  });

  it('should be initialized', () => {
    expect(service.word$.getValue()).toEqual('___');
    expect(service.success$.getValue()).toEqual(undefined)
  });

  it('should accept a correct letter', () => {
    service.guessLetter('b');
    expect(service.word$.getValue()).toEqual('_b_');
    expect(service.success$.getValue()).toEqual(undefined)
  });

  it('should not accept a wrong letter', () => {
    service.guessLetter('x');
    expect(service.word$.getValue()).toEqual('___');
    expect(service.success$.getValue()).toEqual(undefined)
  });

  it('should send success when finished', () => {
    service.guessLetter('a');
    service.guessLetter('b');
    service.guessLetter('c');
    expect(service.word$.getValue()).toEqual('abc');
    expect(service.success$.getValue()).toEqual(true);
    expect(service.fails$.getValue()).toEqual(0);
  });

  it('should fail after max tries', () => {
    service.guessLetter('x');
    service.guessLetter('y');
    service.guessLetter('z');
    expect(service.word$.getValue()).toEqual('___');
    expect(service.success$.getValue()).toEqual(false);
    expect(service.fails$.getValue()).toEqual(3);
  });

  it('should not evaluate the same key multiple times', () => {
    service.guessLetter('x');
    service.guessLetter('x');
    expect(service.fails$.getValue()).toEqual(1);
  });
});
