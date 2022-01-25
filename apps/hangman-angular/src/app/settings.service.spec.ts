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
    let currentValue: WordProvider | undefined;
    service.wordProvider$.subscribe(value => currentValue = value);

    expect(currentValue).toEqual(WordProvider.SIMPLE);
  });

  it('should allow to change the word provider setting', () => {
    let currentValue: WordProvider | undefined;
    service.wordProvider$.subscribe(value => currentValue = value);

    service.setWordProvider(WordProvider.KRAUT_IPSUM);

    expect(currentValue).toEqual(WordProvider.KRAUT_IPSUM);
  });

  it('should persist between sessions', () => {
    let currentValue: WordProvider | undefined;
    new SettingsService().setWordProvider(WordProvider.KRAUT_IPSUM);
    const service = new SettingsService();
    service.wordProvider$.subscribe(value => currentValue = value);

    expect(currentValue).toEqual(WordProvider.KRAUT_IPSUM);
  });
});
