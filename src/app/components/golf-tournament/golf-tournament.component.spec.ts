import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfTournamentComponent } from './golf-tournament.component';

describe('GolfTournamentComponent', () => {
  let component: GolfTournamentComponent;
  let fixture: ComponentFixture<GolfTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
