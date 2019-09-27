import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEntityComponent } from './track-entity.component';

describe('TrackEntityComponent', () => {
  let component: TrackEntityComponent;
  let fixture: ComponentFixture<TrackEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
