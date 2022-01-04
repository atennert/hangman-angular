import {TestBed, waitForAsync} from "@angular/core/testing";
import {KrautWordService} from "./kraut-word.service";
import * as fetchMock from "fetch-mock/esm/client";

describe('KrautWordService', () => {
  let service: KrautWordService;

  const krautResponse = {
    noun: 'ANoun'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KrautWordService]
    });
    service = TestBed.inject(KrautWordService);

    fetchMock.mock('https://krautipsum.com/api/noun', krautResponse);
  });

  it('should give a word from the internal list', waitForAsync(() => {
    service.getWord()
      .then(word => {
        console.log(word);
        expect(word).toEqual(krautResponse.noun);
      });
  }));
});
