import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPortalComponent } from './farmer-portal.component';

describe('FarmerPortalComponent', () => {
  let component: FarmerPortalComponent;
  let fixture: ComponentFixture<FarmerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
