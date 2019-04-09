import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzernDetailsComponent } from './luzern-details.component';

describe('LuzernDetailsComponent', () => {
  let component: LuzernDetailsComponent;
  let fixture: ComponentFixture<LuzernDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzernDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzernDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
