import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

export enum WordProvider {
  SIMPLE,
  KRAUT_IPSUM
}

/**
 * Service that provides settings to the application.
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly _wordProvider: BehaviorSubject<WordProvider>;

  constructor() {
    // @ts-ignore TS7015
    this._wordProvider = new BehaviorSubject(SettingsService.loadSetting<WordProvider>('wordProvider', WordProvider.SIMPLE, v => WordProvider[v]));
  }

  public setWordProvider(wordProvider: WordProvider) {
    this._wordProvider.next(wordProvider);
    localStorage.setItem('wordProvider', WordProvider[wordProvider]);
  }

  public get wordProvider$(): Subject<WordProvider> {
    return this._wordProvider;
  }

  private static loadSetting<T>(key: string, defaultValue: T, converter: (a: string) => T): T {
    const storageValue = localStorage.getItem(key);
    return storageValue == null
      ? defaultValue
      : converter(storageValue);
  }
}
