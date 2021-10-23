import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { agendaMedica } from '../../../core/mocks/db';

@Component({
  selector: 'app-ordenmedica-listado',
  templateUrl: './ordenmedica-listado.component.html',
  styleUrls: ['./ordenmedica-listado.component.css'],
})
export class OrdenmedicaListadoComponent implements OnInit {
  agendaMedica$: Observable<any>;

  constructor(private Router: Router) {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }

  onRegistrar() {
    this.Router.navigate(['home/ordenmedica/registrar']);
  }
}
