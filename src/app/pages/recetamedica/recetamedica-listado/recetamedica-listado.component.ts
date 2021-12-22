import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ServicesService } from '../services/services.service';
import {
  HttpService,
  StorageService,
  MessagesModalService,
} from '../../../core/services';

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
  parameterSearch: string;
  p: number = 0;

  private readonly unsubscribe$: Subject<void> = new Subject();
  constructor(
    private Router: Router,
    private ServicesService: ServicesService,
    private StorageService: StorageService,
    private HttpService: HttpService,
    private DomSanitizer: DomSanitizer,
    private MessagesModalService: MessagesModalService
  ) {}

  ngOnInit(): void {
    this.onRecetaMedica(moment());
    this.ServicesService.regresh.subscribe((_) =>
      this.onRecetaMedica(moment())
    );
  }

  get urlFirma() {
    return this.DomSanitizer.bypassSecurityTrustHtml(
      this.ServicesService.urlWatana
    );
  }

  Search({ value }) {
    this.parameterSearch = value;
  }

  onRecetaMedica(fecha: any) {
    this.datas$ = this.ServicesService.getbandejaRecetaMedico(
      moment(fecha).format('DD-MM-YYYY')
    );
  }

  onRegistrar() {
    this.Router.navigate(['home/recetamedica/registrar']);
  }

  onViews({ idReceta }) {
    this.ServicesService.getrecetaData(idReceta)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.ServicesService.dataReceta.next(new RecetaMedicaViews(data));
        this.Router.navigate(['home/recetamedica/registrar']);
      });
  }

  onDelete({ idReceta }) {
    const BODY__MESSAGE = {
      title: '¿Quieres eliminar receta?',
      icon: 'warning',
      id: idReceta,
    };

    this.MessagesModalService.messageConfirma(
      BODY__MESSAGE,
      this.ServicesService
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
