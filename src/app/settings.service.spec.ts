import {TestBed} from '@angular/core/testing';

import {SettingsService, WordProvider} from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  afterEach(() => {
    localStorage.removeItem('wordProvider');
  });

  it('should return the simple word provider setting as default', () => {
    console.log(service.getWordProvider());
    expect(service.getWordProvider()).toEqual(WordProvider.SIMPLE);
  });

  it('should allow to change the word provider setting', () => {
    service.setWordProvider(WordProvider.KRAUT_IPSUM);
    expect(service.getWordProvider()).toEqual(WordProvider.KRAUT_IPSUM);
  });

  it('should persist between sessions', () => {
    let service = new SettingsService();
    service.setWordProvider(WordProvider.KRAUT_IPSUM);
    service = new SettingsService()
    expect(service.getWordProvider()).toEqual(WordProvider.KRAUT_IPSUM);
  });
});
