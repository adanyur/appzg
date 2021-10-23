import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetamedicaListadoComponent } from './recetamedica-listado.component';

describe('RecetamedicaListadoComponent', () => {
  let component: RecetamedicaListadoComponent;
  let fixture: ComponentFixture<RecetamedicaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetamedicaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetamedicaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
