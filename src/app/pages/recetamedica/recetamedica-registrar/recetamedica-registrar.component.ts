import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { StorageService } from '../../../core/services';
import { HttpService } from '../../../core/services';

@Component({
  selector: 'app-recetamedica-registrar',
  templateUrl: './recetamedica-registrar.component.html',
  styleUrls: ['./recetamedica-registrar.component.css'],
})
export class RecetamedicaRegistrarComponent implements OnInit, OnDestroy {
  pacientes$: Observable<any>;
  medicamentos$: Observable<any>;
  total$: Observable<any>;
  form: FormGroup;
  SearchMedicamentoParameter: string;
  searchPacienteParameter: string;

  private readonly unsubscribe$: Subject<void> = new Subject();
  searchMedicamentos$ = new Subject<any>();
  get detalles(): FormArray {
    return this.form.get('detalles') as FormArray;
  }

  get tieneDetalle() {
    return this.detalles.length > 0;
  }

  constructor(
    private fb: FormBuilder,
    private StorageService: StorageService,
    private HttpService: HttpService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      historia: [null],
      paciente: [null],
      cmp: [null],
      medico: [null],
      especialidad: [null],
      dx: [null],
      descripcionDiagnostico: [null],
      detalles: this.fb.array([]),
    });

    // this.medicamentos$ = of(medicamentos);
    this.pacientes$ = this.HttpService.getPacienteSearch();
    this.setMedico();
    this.getMedicamento();
  }

  setMedico() {
    this.HttpService.getDatosDelMedico(this.StorageService.codigoCmp)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        const { nomelemento, codmedico, codespecialidad } = data[0];
        this.form.patchValue({
          cmp: codmedico,
          medico: nomelemento,
          especialidad: codespecialidad,
        });
      });
  }

  searchMedicamento({ value }) {
    this.searchMedicamentos$.next(value);
    this.SearchMedicamentoParameter = value;
  }

  getMedicamento() {
    this.medicamentos$ = this.searchMedicamentos$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      switchMap((searchText: string) =>
        this.HttpService.getsearchMedicamentos(searchText)
      )
    );
  }

  searchPaciente({ value }) {
    this.searchPacienteParameter = value;
  }

  selectPaciente(data: any) {
    this.form.patchValue(data);
    this.searchPacienteParameter = undefined;
  }

  selectMedicamento({ nombre }) {
    let item = this.fb.group({
      descripcion: nombre,
      precio: 10,
      cantidad: 0,
      subtotal: 0,
    });
    this.detalles.push(item);
    this.SearchMedicamentoParameter = undefined;

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
