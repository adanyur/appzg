import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { agendaMedica } from '../../../core/mocks/db';

@Component({
  selector: 'app-recetamedica-listado',
  templateUrl: './recetamedica-listado.component.html',
  styleUrls: ['./recetamedica-listado.component.css'],
})
export class RecetamedicaListadoComponent implements OnInit {
  agendaMedica$: Observable<any>;

  constructor(private Router: Router) {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }

  onRegistrar() {
    this.Router.navigate(['home/recetamedica/registrar']);
  }
}
