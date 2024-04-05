import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewTeamsComponent } from './user-view-teams.component';

describe('UserViewTeamsComponent', () => {
  let component: UserViewTeamsComponent;
  let fixture: ComponentFixture<UserViewTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
