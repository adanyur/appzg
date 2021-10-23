import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { agendaMedica } from '../../core/mocks/db';
@Component({
  selector: 'app-ordenmedica',
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class OrdenmedicaComponent implements OnInit {
  agendaMedica$: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.agendaMedica$ = of(agendaMedica);
  }
}
