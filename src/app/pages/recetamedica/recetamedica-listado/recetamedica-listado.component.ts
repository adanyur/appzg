import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ServicesService } from '../services/services.service';
import { HttpService, StorageService } from '../../../core/services';

import { RecetaMedicaViews } from '../models';

import * as moment from 'moment';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-recetamedica-listado',
  templateUrl: './recetamedica-listado.component.html',
  styleUrls: ['./recetamedica-listado.component.css'],
})
export class RecetamedicaListadoComponent implements OnInit, OnDestroy {
  agendaMedica$: Observable<any>;
  datas$: Observable<any>;

  p: number = 0;

  private readonly unsubscribe$: Subject<void> = new Subject();
  constructor(
    private Router: Router,
    private ServicesService: ServicesService,
    private StorageService: StorageService,
    private HttpService: HttpService
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

  onViews({ idReceta }) {
    this.ServicesService.getrecetaData(idReceta)
      .pipe(
        tap((data: any) =>
          this.ServicesService.dataReceta.next(new RecetaMedicaViews(data))
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((_) => this.Router.navigate(['home/recetamedica/registrar']));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
