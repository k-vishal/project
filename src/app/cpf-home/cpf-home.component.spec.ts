import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfHomeComponent } from './cpf-home.component';

describe('CpfHomeComponent', () => {
  let component: CpfHomeComponent;
  let fixture: ComponentFixture<CpfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
