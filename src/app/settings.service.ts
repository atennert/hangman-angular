import {Injectable} from '@angular/core';

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

  private wordProvider = WordProvider.SIMPLE;

  constructor() {
    this.loadSettings()
  }

  public setWordProvider(wordProvider: WordProvider) {
    this.wordProvider = wordProvider;
    localStorage.setItem('wordProvider', `${wordProvider}`);
  }

  public getWordProvider(): WordProvider {
    return this.wordProvider;
  }

  private loadSettings() {
    // @ts-ignore
    this.wordProvider = SettingsService.loadSetting<WordProvider>('wordProvider', WordProvider.SIMPLE, v => WordProvider[WordProvider[parseInt(v, 10)]]);
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
