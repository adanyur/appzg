import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetamedicaAcordeonComponent } from './recetamedica-acordeon.component';

describe('RecetamedicaAcordeonComponent', () => {
  let component: RecetamedicaAcordeonComponent;
  let fixture: ComponentFixture<RecetamedicaAcordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetamedicaAcordeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetamedicaAcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
