import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenmedicaRegistrarComponent } from './ordenmedica-registrar.component';

describe('OrdenmedicaRegistrarComponent', () => {
  let component: OrdenmedicaRegistrarComponent;
  let fixture: ComponentFixture<OrdenmedicaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenmedicaRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenmedicaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
