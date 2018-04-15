import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityConsiderComponent } from './university-consider.component';

describe('UniversityConsiderComponent', () => {
  let component: UniversityConsiderComponent;
  let fixture: ComponentFixture<UniversityConsiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityConsiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
