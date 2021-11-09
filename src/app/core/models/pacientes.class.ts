export class Paciente {
  public paciente: string;
  public historia: string;

  constructor({ nombre, apellido, numdoc }) {
    this.paciente = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
    this.historia = numdoc;
  }
}
