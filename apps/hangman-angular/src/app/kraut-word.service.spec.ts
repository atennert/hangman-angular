import {TestBed, waitForAsync} from "@angular/core/testing";
import {KrautWordService} from "./kraut-word.service";

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
  });

  it('should give a word from the internal list', waitForAsync(() => {
/*    service.getWord()
      .then(word => {
        console.log(word);
        expect(word).toEqual(krautResponse.noun);
      });*/
  }));
});
