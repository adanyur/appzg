import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import {
  StorageService,
  HttpService,
  MessagesModalService,
} from '../../../core/services';
import { ServicesService } from '../services/services.service';
import { FormRecetaMedica } from '../models/form-recetamedica.class';

@Component({
  selector: 'app-recetamedica-registrar',
  templateUrl: './recetamedica-registrar.component.html',
  styleUrls: ['./recetamedica-registrar.component.css'],
})
export class RecetamedicaRegistrarComponent implements OnInit, OnDestroy {
  pacientes$: Observable<any>;
  medicamentos$: Observable<any>;
  total$: Observable<any>;
  diagnostico$: Observable<any>;

  form: FormGroup;

  SearchMedicamentoParameter: string;
  searchPacienteParameter: string;
  searchDiagnosticoParameter: string;

  user: string = this.StorageService.userName;

  private readonly unsubscribe$: Subject<void> = new Subject();
  searchMedicamentos$ = new Subject<any>();
  get detalles(): FormArray {
    return this.form.get('items') as FormArray;
  }

  get tieneDetalle() {
    return this.detalles.length > 0;
  }

  constructor(
    private fb: FormBuilder,
    private StorageService: StorageService,
    private HttpService: HttpService,
    private ServicesService: ServicesService,
    private MessagesModalService: MessagesModalService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      historia: [null],
      cliente: [null],
      paciente: [null],
      cmp: [{ value: null, disabled: true }],
      medicoDescripcion: [{ value: null, disabled: true }],
      medico: [null],
      dpto: ['12'],
      especialidad: [{ value: null, disabled: true }],
      dx: [null],
      nota: [null],
      descripcionDiagnostico: [null],
      items: this.fb.array([]),
      usereg: [this.user],
    });

    this.pacientes$ = this.HttpService.getPacienteSearch();
    this.setMedico();
    this.getMedicamento();
    this.getDiagnostico();
  }

  addItem() {
    const group = this.fb.group({
      cantidad: 1,
      precio: 14.5,
      medicina: {
        id: 1,
      },
      estado: '1',
      fcreacion: '2021-11-04',
      user: 'ADMIN',
      posologia: 'cada 8 horas',
      importe: 14.5,
    });

    this.detalles.push(group);
  }

  setMedico() {
    this.HttpService.getDatosDelMedico(this.StorageService.idMedico)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ cmp, medico, especialidad }) => {
        this.StorageService.setCmp(cmp);

        this.form.patchValue({
          cmp,
          medicoDescripcion: medico,
          especialidad,
          medico: cmp,
        });
      });
  }

  searchMedicamento({ value }) {
    this.searchMedicamentos$.next(value);
    this.SearchMedicamentoParameter = value;
  }

  getDiagnostico() {
    this.diagnostico$ = this.HttpService.getDiagnostico();
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

  searchDiagnostico({ value }) {
    this.searchDiagnosticoParameter = value;
  }

  searchPaciente({ value }) {
    this.searchPacienteParameter = value;
  }

  selectDiagnostico({ codigo, descripcion }) {
    this.form.patchValue({ dx: codigo, descripcionDiagnostico: descripcion });
    this.searchDiagnosticoParameter = undefined;
  }

  selectPaciente({ paciente, historia, id }) {
    this.form.patchValue({ paciente, historia, cliente: { id } });
    this.searchPacienteParameter = undefined;
  }

  selectMedicamento({ nombre, id }) {
    let item = this.fb.group({
      descripcion: nombre,
      medicina: { id },
      precio: 10,
      cantidad: 0,
      posologia: null,
      importe: 0,
      estado: '1',
      user: this.user,
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
    item.get('importe').setValue(precio * cantidad, { emitEvent: false });
    this.calcularTotal();
  }

  calcularTotal() {
    this.total$ = of(
      this.detalles.value.reduce((total, value) => total + value.subtotal, 0)
    );
  }

  deleteMedicamento(indiceMedicamento: number) {
    this.detalles.removeAt(indiceMedicamento);
  }

  onSubmit() {
    console.log(new FormRecetaMedica(this.form.value));
    this.ServicesService.postRegistroRecetaMedica(
      new FormRecetaMedica(this.form.value)
    ).subscribe((data) => {
      this.MessagesModalService.messageSuccesSave(
        '¡Se Registro Correctamente!'
      );
      this.form.reset();
      this.detalles.clear();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
