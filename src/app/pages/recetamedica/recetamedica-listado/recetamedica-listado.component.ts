import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../services/services.service';

import * as moment from 'moment';

@Component({
  selector: 'app-recetamedica-listado',
  templateUrl: './recetamedica-listado.component.html',
  styleUrls: ['./recetamedica-listado.component.css'],
})
export class RecetamedicaListadoComponent implements OnInit {
  agendaMedica$: Observable<any>;
  datas$: Observable<any>;

  constructor(
    private Router: Router,
    private ServicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this.onRecetaMedica(moment());
  }

  onRecetaMedica(fecha: any) {
    this.datas$ = this.ServicesService.getbandejaRctMedico(
      moment(fecha).format('DD-MM-YYYY')
    );
  }

  onRegistrar() {
    this.Router.navigate(['home/recetamedica/registrar']);
  }

  viewPdf({ idReceta }) {
    this.ServicesService.viewPDF(idReceta).subscribe(console.log);
  }
}
