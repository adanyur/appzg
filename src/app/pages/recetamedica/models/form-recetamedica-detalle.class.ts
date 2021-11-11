import * as moment from 'moment';

export class FormRecetaMedicaDetalla {
  medicina: string;
  precio: number;
  cantidad: number;
  posologia: string;
  importe: number;
  fcreacion: string;
  estado: string;
  user: string;

  constructor({
    medicina,
    precio,
    cantidad,
    posologia,
    importe,
    estado,
    user,
  }) {
    this.cantidad = cantidad;
    this.precio = precio;
    this.medicina = medicina;
    this.estado = estado;
    this.fcreacion = moment().format('YYYY-MM-DD');
    this.user = user;
    this.posologia = posologia;
    this.importe = importe;
  }
}
