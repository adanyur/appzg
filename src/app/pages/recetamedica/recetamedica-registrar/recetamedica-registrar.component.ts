import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  takeUntil,
  tap,
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

  searchPacienteParameter: string;
  SearchMedicamentoParameter: string;
  searchDiagnosticoParameter: string;

  SearchMedicamentoStatus: boolean = false;
  searchDiagnosticoStatus: boolean = false;

  user: string = this.StorageService.userName;
  cmp: string = this.StorageService.codigoCmp;

  private readonly unsubscribe$: Subject<void> = new Subject();
  searchMedicamentos$ = new Subject<any>();
  searchDiagnosticos$ = new Subject<any>();
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
    private MessagesModalService: MessagesModalService,
    private Router: Router
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
    this.setDataReceta();
  }

  setDataReceta() {
    this.ServicesService.dataReceta
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.form.patchValue(data);
        data.items.map(
          ({
            cantidad,
            precio,
            medicina: { id, nombre },
            posologia,
            importe,
            user,
            estado,
          }) => {
            console.log({ id, nombre });
            const group = this.fb.group({
              cantidad,
              precio,
              medicina: id,
              descripcion: nombre,
              posologia,
              importe,
              user,
              estado,
            });

            this.detalles.push(group);
          }
        );
      });
  }

  setMedico() {
    this.HttpService.getDatosDelMedico(this.cmp).subscribe(
      ({ cmp, medico, especialidad }) => {
        this.form.patchValue({
          cmp,
          medicoDescripcion: medico,
          especialidad,
          medico: cmp,
        });
      }
    );
  }

  searchMedicamento({ value }) {
    this.searchMedicamentos$.next(value);
    this.SearchMedicamentoStatus = true;
  }

  getMedicamento() {
    this.medicamentos$ = this.searchMedicamentos$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      switchMap((searchText: string) =>
        this.HttpService.getsearchMedicamentos(searchText.toUpperCase())
      ),
      tap((_) => (this.SearchMedicamentoStatus = true))
    );
  }

  searchDiagnostico({ value }) {
    this.searchDiagnosticos$.next(value);
    this.searchDiagnosticoStatus = true;
  }

  getDiagnostico() {
    this.diagnostico$ = this.searchDiagnosticos$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      switchMap((searchText: string) =>
        this.HttpService.getDiagnostico(searchText.toUpperCase())
      )
    );
  }

  searchPaciente({ value }) {
    this.searchPacienteParameter = value;
  }

  selectDiagnostico({ codigo, descripcion }) {
    this.form.patchValue({ dx: codigo, descripcionDiagnostico: descripcion });
    this.searchDiagnosticoStatus = false;
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
    this.detalles.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((_) => this.cacularSubtotal(item));

    this.SearchMedicamentoStatus = false;
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
    // console.log(new FormRecetaMedica(this.form.value));
    this.ServicesService.postRegistroRecetaMedica(
      new FormRecetaMedica(this.form.value)
    ).subscribe((data) => {
      this.MessagesModalService.messageSuccesSave(
        '¡Se Registro Correctamente!'
      );
      this.form.reset();
      this.detalles.clear();
      this.Router.navigate(['home/recetamedica']);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
