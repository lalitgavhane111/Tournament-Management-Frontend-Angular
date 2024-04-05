import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentServiceComponent } from './tournament-service.component';

describe('TournamentServiceComponent', () => {
  let component: TournamentServiceComponent;
  let fixture: ComponentFixture<TournamentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
