import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselnDetailsComponent } from './baseln-details.component';

describe('BaselnDetailsComponent', () => {
  let component: BaselnDetailsComponent;
  let fixture: ComponentFixture<BaselnDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselnDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
