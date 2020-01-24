import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLiveAddforAdminComponent } from './all-live-addfor-admin.component';

describe('AllLiveAddforAdminComponent', () => {
  let component: AllLiveAddforAdminComponent;
  let fixture: ComponentFixture<AllLiveAddforAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLiveAddforAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLiveAddforAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
