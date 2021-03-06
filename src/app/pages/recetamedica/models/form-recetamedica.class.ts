import * as moment from 'moment';
import { FormRecetaMedicaDetalla } from './form-recetamedica-detalle.class';

export class FormRecetaMedica {
  id: string;
  cliente: string;
  medico: string;
  dpto: string;
  dx: string;
  nota: string;
  fecha: string;
  usereg: string;
  estado: string;
  items: [];

  constructor({ cliente, medico, dpto, dx, nota, items, usereg, estado, id }) {
    this.cliente = cliente;
    this.medico = medico;
    this.dpto = dpto;
    this.dx = dx;
    this.nota = nota;
    this.fecha = moment().format('YYYY-MM-DD');
    this.usereg = usereg;
    this.items = items.map((value: any) => new FormRecetaMedicaDetalla(value));
    this.estado = estado;
    this.id = id;
  }
}
