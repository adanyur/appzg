export class RecetaMedica {
  public tipoDeDocumento: string;
  public numeroDeDocumento: string;
  public nombre: string;
  public apellido: string;
  public edad: number;
  public genero: string;
  public diagnostico: string;
  public idReceta: number;

  constructor({
    cliente: { nombre, apellido, numdoc, tipodoc },
    dx,
    id_receta,
  }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroDeDocumento = numdoc;
    this.tipoDeDocumento = tipodoc;
    this.edad = 22;
    this.genero = 'Masculino';
    this.diagnostico = dx;
    this.idReceta = id_receta;
  }

  get descripcionTipoDeDocumento() {
    const TIPO_DOCUMENTO = {
      '1': 'DNI',
      '2': 'carnet de extranejeria',
      '3': 'Pasaporte',
    };

    return TIPO_DOCUMENTO[this.tipoDeDocumento];
  }
}
