import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenmedicaListadoComponent } from './ordenmedica-listado.component';

describe('OrdenmedicaListadoComponent', () => {
  let component: OrdenmedicaListadoComponent;
  let fixture: ComponentFixture<OrdenmedicaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenmedicaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenmedicaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
