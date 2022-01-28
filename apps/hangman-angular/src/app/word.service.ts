import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/**
 * Interface for services that provide words
 */
@Injectable()
export abstract class WordService {
  abstract getWord(): Observable<string>;
}
