import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityNavComponent } from './university-nav.component';

describe('UniversityNavComponent', () => {
  let component: UniversityNavComponent;
  let fixture: ComponentFixture<UniversityNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
