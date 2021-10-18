import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css'],
})
export class ModulosComponent implements OnInit {
  data = [
    {
      name: 'Agenda Medica',
      icon: 'assets/icon/calendar.svg',
    },
    {
      name: 'Programacion Sala',
      icon: 'assets/icon/medical-results.svg',
    },
    {
      name: 'Tarifario Medico',
      icon: 'assets/icon/calendar.svg',
    },
    {
      name: 'Resultado Medico',
      icon: 'assets/icon/medical-results.svg',
    },

    {
      name: 'Orden Medica',
      icon: 'assets/icon/calendar.svg',
    },
    {
      name: 'Receta Medica',
      icon: 'assets/icon/medical-results.svg',
    },
  ];

  constructor() {}
  datas$: Observable<any>;

  ngOnInit(): void {
    this.datas$ = of(this.data);
  }
}
