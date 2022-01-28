import {inject, TestBed} from "@angular/core/testing";
import {KrautWordService} from "./kraut-word.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('KrautWordService', () => {
  let service: KrautWordService;

  const krautResponse = {
    noun: 'ANoun'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KrautWordService]
    });
    service = TestBed.inject(KrautWordService);
  });

  it('should get word from kraut ipsum',
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
        service.getWord()
          .subscribe(word => {
            console.log(word);
            expect(word).toEqual(krautResponse.noun);
          });
        const mockReq = httpMock.expectOne('https://krautipsum.com/api/noun');
        mockReq.flush(krautResponse);
        httpMock.verify();
      }));
});
