import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MODULOS } from '../../../core/mocks/db';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css'],
})
export class ModulosComponent implements OnInit {
  constructor() {}
  datas$: Observable<any>;

  ngOnInit(): void {
    this.datas$ = of(MODULOS);
  }
}
