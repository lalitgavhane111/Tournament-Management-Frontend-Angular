import { TestBed } from '@angular/core/testing';

import { UsersideServiceService } from './userside-service.service';

describe('UsersideServiceService', () => {
  let service: UsersideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
