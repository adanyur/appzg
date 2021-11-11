export class Paciente {
  public paciente: string;
  public historia: string;
  public id: number;

  constructor({ nombre, apellido, numdoc, id }) {
    this.paciente = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
    this.historia = numdoc;
    this.id = id;
  }
}
