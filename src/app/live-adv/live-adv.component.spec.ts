import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAdvComponent } from './live-adv.component';

describe('LiveAdvComponent', () => {
  let component: LiveAdvComponent;
  let fixture: ComponentFixture<LiveAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
