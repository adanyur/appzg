export class RecetaMedicaViews {
  public id: string;
  public historia: string;
  public cliente: {};
  public paciente: string;
  public cmp: string;
  public medicoDescripcion: string;
  public medico: string;
  public dpto: string;
  public especialidad: string;
  public dx: string;
  public nota: string;
  public descripcionDiagnostico: string;
  public items: [];

  constructor({
    cliente: { id, nombre, apellido, numdoc },
    medico,
    dpto,
    dx,
    nota,
    items,
    id_receta,
  }) {
    this.historia = numdoc;
    this.cliente = { id };
    this.paciente = `${nombre} ${apellido}`;
    this.cmp = medico;
    this.medico = medico;
    this.dpto = dpto;
    this.dx = dx;
    this.nota = nota;
    this.items = items;
    this.id = id_receta;
  }
}
