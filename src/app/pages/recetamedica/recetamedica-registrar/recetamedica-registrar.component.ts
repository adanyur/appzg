import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { medicamentos } from '../../../core/mocks/db';

@Component({
  selector: 'app-recetamedica-registrar',
  templateUrl: './recetamedica-registrar.component.html',
  styleUrls: ['./recetamedica-registrar.component.css'],
})
export class RecetamedicaRegistrarComponent implements OnInit, OnDestroy {
  form: FormGroup;
  medicamentos$: Observable<any>;
  parametersSearch: string;
  total$: Observable<any>;
  private readonly unsubscribe$: Subject<void> = new Subject();
  get detalles(): FormArray {
    return this.form.get('detalles') as FormArray;
  }

  get tieneDetalle() {
    return this.detalles.length > 0;
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
    let item = this.fb.group({
      descripcion,
      precio,
      cantidad: 0,
      subtotal: 0,
    });
    this.detalles.push(item);
    this.parametersSearch = undefined;

    this.detalles.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((_) => this.cacularSubtotal(item));
  }

  cacularSubtotal(item: FormGroup) {
    let precio = item.get('precio').value;
    let cantidad = item.get('cantidad').value;
    item.get('subtotal').setValue(precio * cantidad, { emitEvent: false });
    this.calcularTotal();
  }

  calcularTotal() {
    this.total$ = of(
      this.detalles.value.reduce((total, value) => total + value.subtotal, 0)
    );
  }

  deleteMedicamento(indiceMedicamenti: number) {
    this.detalles.removeAt(indiceMedicamenti);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
