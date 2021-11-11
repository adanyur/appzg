export class Diagnosticos {
  public codigo: string;
  public descripcion: string;

  constructor({ codelemento, nomelemento }) {
    this.codigo = codelemento;
    this.descripcion = nomelemento;
  }
}
