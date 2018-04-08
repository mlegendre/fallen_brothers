import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalkRunComponent } from './chalk-run.component';

describe('ChalkRunComponent', () => {
  let component: ChalkRunComponent;
  let fixture: ComponentFixture<ChalkRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalkRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalkRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
