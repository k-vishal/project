import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedAdvComponent } from './rejected-adv.component';

describe('RejectedAdvComponent', () => {
  let component: RejectedAdvComponent;
  let fixture: ComponentFixture<RejectedAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
