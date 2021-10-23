import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetamedicaRegistrarComponent } from './recetamedica-registrar.component';

describe('RecetamedicaRegistrarComponent', () => {
  let component: RecetamedicaRegistrarComponent;
  let fixture: ComponentFixture<RecetamedicaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetamedicaRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetamedicaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
