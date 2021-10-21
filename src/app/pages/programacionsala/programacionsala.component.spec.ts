import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionsalaComponent } from './programacionsala.component';

describe('ProgramacionsalaComponent', () => {
  let component: ProgramacionsalaComponent;
  let fixture: ComponentFixture<ProgramacionsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionsalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
