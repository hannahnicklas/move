import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesBoxesComponent } from './experiences-boxes.component';

describe('ExperiencesBoxesComponent', () => {
  let component: ExperiencesBoxesComponent;
  let fixture: ComponentFixture<ExperiencesBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
