import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerHomeComponent } from './wholesaler-home.component';

describe('WholesalerHomeComponent', () => {
  let component: WholesalerHomeComponent;
  let fixture: ComponentFixture<WholesalerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
