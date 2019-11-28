import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCourseDataComponent } from './race-course-data.component';

describe('RaceCourseDataComponent', () => {
  let component: RaceCourseDataComponent;
  let fixture: ComponentFixture<RaceCourseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCourseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCourseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
