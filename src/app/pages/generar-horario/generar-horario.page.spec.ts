import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarHorarioPage } from './generar-horario.page';

describe('GenerarHorarioPage', () => {
  let component: GenerarHorarioPage;
  let fixture: ComponentFixture<GenerarHorarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarHorarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
