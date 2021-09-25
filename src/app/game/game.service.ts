import {Injectable} from '@angular/core';
import {WordService} from "../word.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _currentWord = new BehaviorSubject('');
  private _targetWord = '';
  private _usedKeys = '';

  private _success = new BehaviorSubject<boolean | undefined>(undefined);
  private _maxFails = 0;
  private _fails = new BehaviorSubject<number>(0);

  constructor(private wordService: WordService) {
  }

  public initialize(maxFails: number) {
    this._targetWord = this.wordService.getWord();
    this._currentWord.next(
      Array.from(this._targetWord)
        .map(l => l.replace(/[a-zA-ZäöüÄÖÜß]/, '_'))
        .join('')
    );
    this.success$.next(undefined);
    this._maxFails = maxFails;
    this._fails.next(0);
    this._usedKeys = '';
  }

  public get word$(): BehaviorSubject<string> {
    return this._currentWord;
  }

  public get success$(): BehaviorSubject<boolean | undefined> {
    return this._success;
  }

  public get fails$(): BehaviorSubject<number> {
    return this._fails;
  }

  public get targetWord(): string {
    return this._targetWord;
  }

  public guessLetter(letter: string) {
    if (this._usedKeys.includes(letter.toLowerCase())) {
      return;
    }

    const targetLowerCase = this._targetWord.toLowerCase();
    this._usedKeys = this._usedKeys + letter.toLowerCase();

    if (targetLowerCase.includes(letter.toLowerCase())) {
      const updatedWord = Array.from(this._currentWord.getValue())
        .map((l, i) => targetLowerCase[i] === letter ? this._targetWord[i] : l)
        .join('');
      this._currentWord.next(updatedWord);
      if (!updatedWord.includes('_')) {
        this.success$.next(true);
      }
    } else {
      this._fails.next(this._fails.getValue() + 1);
      if (this._fails.getValue() === this._maxFails) {
        this.success$.next(false);
      }
    }
  }
}
