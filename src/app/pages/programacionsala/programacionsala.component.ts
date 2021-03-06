import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { agendaMedica } from '../../core/mocks/db';

@Component({
  selector: 'app-programacionsala',
  templateUrl: './programacionsala.component.html',
  styleUrls: ['./programacionsala.component.css'],
})
export class ProgramacionsalaComponent implements OnInit {
  agendaMedica$: Observable<any>;
  constructor() {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }
}
