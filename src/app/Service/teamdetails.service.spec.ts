import { TestBed } from '@angular/core/testing';

import { TeamService } from './teamdetails.service';

describe('TeamdetailsService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
