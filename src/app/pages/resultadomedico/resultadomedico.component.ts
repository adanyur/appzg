import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { agendaMedica } from '../../core/mocks/db';
@Component({
  selector: 'app-resultadomedico',
  templateUrl: './resultadomedico.component.html',
  styleUrls: ['./resultadomedico.component.css'],
})
export class ResultadomedicoComponent implements OnInit {
  agendaMedica$: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }
}
