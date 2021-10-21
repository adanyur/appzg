import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifariomedicoComponent } from './tarifariomedico.component';

describe('TarifariomedicoComponent', () => {
  let component: TarifariomedicoComponent;
  let fixture: ComponentFixture<TarifariomedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifariomedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifariomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
