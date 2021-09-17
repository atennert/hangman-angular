import { Injectable } from '@angular/core';

export enum WordProvider {
  SIMPLE
}

/**
 * Service that provides settings to the application.
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  public getWordProvider(): WordProvider {
    return WordProvider.SIMPLE;
  }
}
