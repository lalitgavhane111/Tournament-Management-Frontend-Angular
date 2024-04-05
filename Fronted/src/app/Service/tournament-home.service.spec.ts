import { TestBed } from '@angular/core/testing';

import { TournamentHomeService } from './tournament-home.service';

describe('TournamentHomeService', () => {
  let service: TournamentHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
