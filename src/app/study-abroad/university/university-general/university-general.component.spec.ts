import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityGeneralComponent } from './university-general.component';

describe('UniversityGeneralComponent', () => {
  let component: UniversityGeneralComponent;
  let fixture: ComponentFixture<UniversityGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
