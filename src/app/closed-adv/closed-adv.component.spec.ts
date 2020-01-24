import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedAdvComponent } from './closed-adv.component';

describe('ClosedAdvComponent', () => {
  let component: ClosedAdvComponent;
  let fixture: ComponentFixture<ClosedAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
