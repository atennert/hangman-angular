import { Injectable } from '@angular/core';
import {WordService} from "./word.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

/**
 * Gets words from Krautipsum.
 */
@Injectable()
export class KrautWordService extends WordService {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  getWord(): Observable<string> {
    return this.httpClient.get<{noun: string}>('https://krautipsum.com/api/noun')
      .pipe(map(response => response.noun))
  }
}
