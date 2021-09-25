import {Injectable} from '@angular/core';
import {WordService} from "../word.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _currentWord = new BehaviorSubject('___');
  private _targetWord = '';

  constructor(private wordService: WordService) {
  }

  public initialize() {
    this._targetWord = this.wordService.getWord();
    this._currentWord.next(
      Array.from(this._targetWord)
        .map(l => l.replace(/[a-zA-ZäöüÄÖÜß]/, '_'))
        .join('')
    );
  }

  public get word$(): BehaviorSubject<string> {
    return this._currentWord;
  }

  public guessLetter(letter: string) {
    const targetLowerCase = this._targetWord.toLowerCase();
    if (targetLowerCase.includes(letter.toLowerCase())) {
      this._currentWord.next(
        Array.from(this._currentWord.getValue())
          .map((l, i) => targetLowerCase[i] === letter ? this._targetWord[i] : l)
          .join(''));
    }
  }
}
