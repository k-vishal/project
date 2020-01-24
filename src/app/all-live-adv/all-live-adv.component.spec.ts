import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLiveAdvComponent } from './all-live-adv.component';

describe('AllLiveAdvComponent', () => {
  let component: AllLiveAdvComponent;
  let fixture: ComponentFixture<AllLiveAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLiveAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLiveAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
