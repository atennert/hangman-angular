import { TestBed } from '@angular/core/testing';

import {SettingsService, WordProvider} from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  it('should return the simple word service setting as default', () => {
    expect(service.getWordProvider()).toEqual(WordProvider.SIMPLE);
  });
});
