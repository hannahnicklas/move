import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCoursesComponent } from './university-courses.component';

describe('UniversityCoursesComponent', () => {
  let component: UniversityCoursesComponent;
  let fixture: ComponentFixture<UniversityCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
