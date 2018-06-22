import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFinishedComponent } from './application-finished.component';

describe('ApplicationFinishedComponent', () => {
  let component: ApplicationFinishedComponent;
  let fixture: ComponentFixture<ApplicationFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
