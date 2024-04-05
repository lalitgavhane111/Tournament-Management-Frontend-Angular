import { TestBed } from '@angular/core/testing';

import { TeamrequestService } from './teamrequest.service';

describe('TeamrequestService', () => {
  let service: TeamrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
