export class Diagnosticos {
  public codigo: string;
  public descripcion: string;

  constructor({ cie, nombre }) {
    this.codigo = cie;
    this.descripcion = nombre;
  }
}
