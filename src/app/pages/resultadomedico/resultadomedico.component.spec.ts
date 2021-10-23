import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadomedicoComponent } from './resultadomedico.component';

describe('ResultadomedicoComponent', () => {
  let component: ResultadomedicoComponent;
  let fixture: ComponentFixture<ResultadomedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadomedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
