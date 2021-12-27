import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesRegistrarEditarComponent } from './pacientes-registrar-editar.component';

describe('PacientesRegistrarEditarComponent', () => {
  let component: PacientesRegistrarEditarComponent;
  let fixture: ComponentFixture<PacientesRegistrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesRegistrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesRegistrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
