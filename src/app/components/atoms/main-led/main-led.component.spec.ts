import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLedComponent } from './main-led.component';

describe('MainLedComponent', () => {
  let component: MainLedComponent;
  let fixture: ComponentFixture<MainLedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
