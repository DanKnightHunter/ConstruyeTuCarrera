import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioGeneradoPage } from './horario-generado.page';

describe('HorarioGeneradoPage', () => {
  let component: HorarioGeneradoPage;
  let fixture: ComponentFixture<HorarioGeneradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioGeneradoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioGeneradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
