import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { agendaMedica } from '../../core/mocks/db';

@Component({
  selector: 'app-agendamedica',
  templateUrl: './agendamedica.component.html',
  styleUrls: ['./agendamedica.component.css'],
})
export class AgendamedicaComponent implements OnInit {
  agendaMedica$: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }
}
