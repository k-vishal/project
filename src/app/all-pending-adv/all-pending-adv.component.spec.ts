import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPendingAdvComponent } from './all-pending-adv.component';

describe('AllPendingAdvComponent', () => {
  let component: AllPendingAdvComponent;
  let fixture: ComponentFixture<AllPendingAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPendingAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPendingAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
