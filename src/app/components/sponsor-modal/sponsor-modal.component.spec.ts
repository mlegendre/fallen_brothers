import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorModalComponent } from './sponsor-modal.component';

describe('SponsorModalComponent', () => {
  let component: SponsorModalComponent;
  let fixture: ComponentFixture<SponsorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
