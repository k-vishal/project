import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStockPortalComponent } from './live-stock-portal.component';

describe('LiveStockPortalComponent', () => {
  let component: LiveStockPortalComponent;
  let fixture: ComponentFixture<LiveStockPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStockPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStockPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
