import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCourseDetailComponent } from './university-course-detail.component';

describe('UniversityCourseDetailComponent', () => {
  let component: UniversityCourseDetailComponent;
  let fixture: ComponentFixture<UniversityCourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityCourseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
