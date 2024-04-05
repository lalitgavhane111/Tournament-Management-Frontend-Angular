import { TestBed } from '@angular/core/testing';

import { ViewteamService } from './viewteam.service';

describe('ViewteamService', () => {
  let service: ViewteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
