import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { agendaMedica } from '../../core/mocks/db';

@Component({
  selector: 'app-tarifariomedico',
  templateUrl: './tarifariomedico.component.html',
  styleUrls: ['./tarifariomedico.component.css'],
})
export class TarifariomedicoComponent implements OnInit {
  agendaMedica$: Observable<any>;
  constructor() {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }
}
