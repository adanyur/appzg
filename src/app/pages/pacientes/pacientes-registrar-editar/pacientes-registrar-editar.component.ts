import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { MessagesModalService } from '../../../core/services';

import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes-registrar-editar',
  templateUrl: './pacientes-registrar-editar.component.html',
  styleUrls: ['./pacientes-registrar-editar.component.css'],
})
export class PacientesRegistrarEditarComponent implements OnInit {
  form: FormGroup;
  openModal: boolean = false;
  private readonly unsubscribe$: Subject<void> = new Subject();
  constructor(
    private fb: FormBuilder,
    private ServicesService: ServicesService,
    private MessagesModalService: MessagesModalService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [null],
      apellido: [null],
      tipodoc: [null],
      numdoc: [null],
      email: [null],
      numcel: [null],
      createFn: [null],
      edad: [null],
    });
    this.modal();
  }

  modal() {
    this.ServicesService.modal.subscribe((_) => (this.openModal = true));
  }

  onCloseModal() {
    this.openModal = false;
  }

  calcularEdad({ value }) {
    const fechaDeNacimiento = moment(value);
    const fechaActual = moment();
    this.form.get('edad').reset(fechaActual.diff(fechaDeNacimiento, 'years'));
  }

  onSubmit() {
    this.ServicesService.postPaciente(this.form.value).subscribe(
      (data: any) => {
        this.onCloseModal();
        this.messageSucces(data);
        this.form.reset();
      }
    );
  }

  messageSucces({ mensaje }) {
    this.MessagesModalService.messageSuccesSave(mensaje);
  }
}
