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
      url: 'home/agendamedica',
    },
    {
      name: 'Programacion Sala',
      icon: 'assets/icon/medical-results.svg',
      url: 'home/agendamedica',
    },
    {
      name: 'Tarifario Medico',
      icon: 'assets/icon/calendar.svg',
      url: 'home/agendamedica',
    },
    {
      name: 'Resultado Medico',
      icon: 'assets/icon/medical-results.svg',
      url: 'home/agendamedica',
    },

    {
      name: 'Orden Medica',
      icon: 'assets/icon/calendar.svg',
      url: 'home/agendamedica',
    },
    {
      name: 'Receta Medica',
      icon: 'assets/icon/medical-results.svg',
      url: 'home/agendamedica',
    },
  ];

  constructor() {}
  datas$: Observable<any>;

  ngOnInit(): void {
    this.datas$ = of(this.data);
  }
}
