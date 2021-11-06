import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { medicamentos } from '../../../core/mocks/db';

@Component({
  selector: 'app-recetamedica-registrar',
  templateUrl: './recetamedica-registrar.component.html',
  styleUrls: ['./recetamedica-registrar.component.css'],
})
export class RecetamedicaRegistrarComponent implements OnInit {
  form: FormGroup;
  medicamentos$: Observable<any>;
  parametersSearch: string;

  get detalles(): FormArray {
    return this.form.get('detalles') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      detalles: this.fb.array([]),
    });

    this.medicamentos$ = of(medicamentos);
  }

  searchMedicamento({ value }) {
    this.parametersSearch = value;
  }

  selectMedicamento({ descripcion, precio }) {
    this.detalles.push(
      this.fb.group({ descripcion, precio, cantidad: 0, subtotal: 0 })
    );
    this.parametersSearch = undefined;
  }

  deleteMedicamento(indiceMedicamenti: number) {
    this.detalles.removeAt(indiceMedicamenti);
  }
}
