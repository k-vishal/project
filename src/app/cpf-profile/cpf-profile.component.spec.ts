import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfProfileComponent } from './cpf-profile.component';

describe('CpfProfileComponent', () => {
  let component: CpfProfileComponent;
  let fixture: ComponentFixture<CpfProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
