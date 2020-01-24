import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlManagementComponent } from './control-management.component';

describe('ControlManagementComponent', () => {
  let component: ControlManagementComponent;
  let fixture: ComponentFixture<ControlManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
