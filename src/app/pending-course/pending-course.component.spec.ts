import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCourseComponent } from './pending-course.component';

describe('PendingCourseComponent', () => {
  let component: PendingCourseComponent;
  let fixture: ComponentFixture<PendingCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
