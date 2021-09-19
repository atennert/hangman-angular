import { Injectable } from '@angular/core';
import {WordService} from "./word.service";

@Injectable()
export class InternalListWordService extends WordService {
  private _wordList = [
    'Haus',
    'Autobahn',
    'Kaninchen',
    'Eisenbahn',
    'Weltall',
    'Ozean',
    'Mensch',
    'Computer',
    'Banane',
    'Sauerkraut'
  ];

  getWord(): string {
    return this._wordList[Math.floor(Math.random() * this._wordList.length)];
  }

  get wordList(): string[] {
    return [...this._wordList];
  }
}
