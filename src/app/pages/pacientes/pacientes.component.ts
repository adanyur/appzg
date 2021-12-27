import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  template: `
    <app-pacientes-listado></app-pacientes-listado>
    <app-pacientes-registrar-editar></app-pacientes-registrar-editar>
  `,
  styleUrls: ['./pacientes.component.css'],
})
export class PacientesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
