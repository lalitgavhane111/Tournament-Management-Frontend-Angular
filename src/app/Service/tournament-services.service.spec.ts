import { TestBed } from '@angular/core/testing';

import { TournamentServicesService } from './tournament-services.service';

describe('TournamentServicesService', () => {
  let service: TournamentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
