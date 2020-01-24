import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClosedAdvComponent } from './all-closed-adv.component';

describe('AllClosedAdvComponent', () => {
  let component: AllClosedAdvComponent;
  let fixture: ComponentFixture<AllClosedAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClosedAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClosedAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
