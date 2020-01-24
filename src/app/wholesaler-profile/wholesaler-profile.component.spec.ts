import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerProfileComponent } from './wholesaler-profile.component';

describe('WholesalerProfileComponent', () => {
  let component: WholesalerProfileComponent;
  let fixture: ComponentFixture<WholesalerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
