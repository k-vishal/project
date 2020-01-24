import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerPortalComponent } from './wholesaler-portal.component';

describe('WholesalerPortalComponent', () => {
  let component: WholesalerPortalComponent;
  let fixture: ComponentFixture<WholesalerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
