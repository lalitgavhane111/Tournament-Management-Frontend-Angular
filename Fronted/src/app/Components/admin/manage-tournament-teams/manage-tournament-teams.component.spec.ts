import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTournamentTeamsComponent } from './manage-tournament-teams.component';

describe('ManageTournamentTeamsComponent', () => {
  let component: ManageTournamentTeamsComponent;
  let fixture: ComponentFixture<ManageTournamentTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTournamentTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTournamentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
