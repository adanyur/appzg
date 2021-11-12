export class Medico {
  public cmp: string;
  public medico: string;
  public especialidad: string;

  constructor({ cmp, nombre, apellidos, especialidad }) {
    this.cmp = cmp;
    this.medico = `${nombre} ${apellidos}`;
    this.especialidad = especialidad.nombre;
  }
}
