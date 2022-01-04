import { Injectable } from '@angular/core';
import {WordService} from "./word.service";

/**
 * Gets words from Krautipsum.
 */
@Injectable()
export class KrautWordService extends WordService {

  getWord(): Promise<string> {
    return fetch('https://krautipsum.com/api/noun')
      .then(response => response.json())
      .then(json => json.noun);
  }
}
