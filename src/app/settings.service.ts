import { Injectable } from '@angular/core';

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

  constructor() { }

  public setWordProvider(wordProvider: WordProvider) {
    this.wordProvider = wordProvider;
  }

  public getWordProvider(): WordProvider {
    return this.wordProvider;
  }
}
