import { Injectable } from '@angular/core';

/**
 * Interface for services that provide words
 */
@Injectable()
export abstract class WordService {
  abstract getWord(): Promise<string>;
}
