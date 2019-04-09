import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZurichDetailsComponent } from './zurich-details.component';

describe('ZurichDetailsComponent', () => {
  let component: ZurichDetailsComponent;
  let fixture: ComponentFixture<ZurichDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZurichDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZurichDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
