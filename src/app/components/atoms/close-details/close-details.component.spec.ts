import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseDetailsComponent } from './close-details.component';

describe('CloseDetailsComponent', () => {
  let component: CloseDetailsComponent;
  let fixture: ComponentFixture<CloseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
