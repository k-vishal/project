import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAdvComponent } from './pending-adv.component';

describe('PendingAdvComponent', () => {
  let component: PendingAdvComponent;
  let fixture: ComponentFixture<PendingAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
