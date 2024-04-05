import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsPlayerComponent } from './register-as-player.component';

describe('RegisterAsPlayerComponent', () => {
  let component: RegisterAsPlayerComponent;
  let fixture: ComponentFixture<RegisterAsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAsPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
