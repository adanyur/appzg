import { environment } from '../../../../environments/environment';

export class RecetaMedica {
  public tipoDeDocumento: string;
  public numeroDeDocumento: string;
  public nombre: string;
  public apellido: string;
  public edad: number;
  public genero: string;
  public diagnostico: string;
  public idReceta: number;
  public urlPdf: string;
  public estado: string;
  public fecha: string;

  constructor({
    cliente: { nombre, apellido, numdoc, tipodoc },
    dx,
    id_receta,
    estado,
    fecha,
  }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroDeDocumento = numdoc;
    this.tipoDeDocumento = tipodoc;
    this.edad = 22;
    this.genero = 'Masculino';
    this.diagnostico = dx;
    this.idReceta = id_receta;
    this.urlPdf = `${environment.apiUrl}/api/pdf/generate?idfactura=${id_receta}`;
    this.estado = estado;
    this.fecha = fecha;
  }

  get descripcionTipoDeDocumento() {
    const TIPO_DOCUMENTO = {
      '1': 'DNI',
      '2': 'carnet de extranejeria',
      '3': 'Pasaporte',
    };

    return TIPO_DOCUMENTO[this.tipoDeDocumento];
  }

  get status() {
    const STATUS = {
      '1': 'borde__status_danger  table__danger',
      '2': 'borde__status__info table__info',
      '3': 'borde__status__warning table__warning',
      '4': 'borde__status__succes table__succes',
    };

    return STATUS[this.estado];
  }
}
