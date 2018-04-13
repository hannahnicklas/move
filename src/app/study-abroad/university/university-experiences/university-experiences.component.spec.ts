import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityExperiencesComponent } from './university-experiences.component';

describe('UniversityExperiencesComponent', () => {
  let component: UniversityExperiencesComponent;
  let fixture: ComponentFixture<UniversityExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
