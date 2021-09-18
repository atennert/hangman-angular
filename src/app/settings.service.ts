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
    // @ts-ignore
    this._wordProvider = new BehaviorSubject(SettingsService.loadSetting<WordProvider>('wordProvider', WordProvider.SIMPLE, v => WordProvider[WordProvider[parseInt(v, 10)]]));
  }

  public setWordProvider(wordProvider: WordProvider) {
    this._wordProvider.next(wordProvider);
    localStorage.setItem('wordProvider', `${wordProvider}`);
  }

  public get wordProvider$(): Subject<WordProvider> {
    return this._wordProvider;
  }

  private static loadSetting<T>(key: string, defaultValue: T, converter: (a: string) => T): T {
    const storageValue = localStorage.getItem(key);
    if (storageValue != null) {
      return converter(storageValue);
    } else {
      return defaultValue;
    }
  }
}
