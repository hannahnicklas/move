import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileApplicationComponent } from './profile-application.component';

describe('ProfileApplicationComponent', () => {
  let component: ProfileApplicationComponent;
  let fixture: ComponentFixture<ProfileApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
