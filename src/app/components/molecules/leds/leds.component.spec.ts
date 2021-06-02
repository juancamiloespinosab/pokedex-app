import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedsComponent } from './leds.component';

describe('LedsComponent', () => {
  let component: LedsComponent;
  let fixture: ComponentFixture<LedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
