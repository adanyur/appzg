import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesListadoComponent } from './pacientes-listado.component';

describe('PacientesListadoComponent', () => {
  let component: PacientesListadoComponent;
  let fixture: ComponentFixture<PacientesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
