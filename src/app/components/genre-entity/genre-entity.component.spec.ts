import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreEntityComponent } from './genre-entity.component';

describe('GenreEntityComponent', () => {
  let component: GenreEntityComponent;
  let fixture: ComponentFixture<GenreEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
