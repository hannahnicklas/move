import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityExperienceDetailComponent } from './university-experience-detail.component';

describe('UniversityExperienceDetailComponent', () => {
  let component: UniversityExperienceDetailComponent;
  let fixture: ComponentFixture<UniversityExperienceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityExperienceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
