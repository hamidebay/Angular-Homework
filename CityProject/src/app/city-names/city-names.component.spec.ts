import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNamesComponent } from './city-names.component';

describe('CityNamesComponent', () => {
  let component: CityNamesComponent;
  let fixture: ComponentFixture<CityNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
