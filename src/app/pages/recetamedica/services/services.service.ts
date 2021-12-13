import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { RecetaMedica } from '../models';

import { StorageService } from '../../../core/services';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(
    private http: HttpClient,
    private StorageService: StorageService
  ) {}

  private __dataReceta = new BehaviorSubject<any>(null);

  get dataReceta() {
    return this.__dataReceta;
  }

  get urlWatana() {
    return `watana:?url_descarga=${environment.url_descarga}&url_subida=${environment.url_subida}&firma_x=${environment.firma_x}&firma_y=${environment.firma_y}&firma_largo=${environment.firma_largo}&firma_alto=${environment.firma_alto}&firma_texto=${environment.firma_texto}&firma_pagina=${environment.firma_pagina}`;
  }

  moldearData = (data: any) => data.map((value) => new RecetaMedica(value));

  getbandejaRecetaMedico(fecha: string) {
    return this.http
      .get(
        `${environment.apiUrl}/api/recetas?medico=${this.StorageService.codigoCmp}&fecha=${fecha}`
      )
      .pipe(map((value) => this.moldearData(value)));
  }

  postRegistroRecetaMedica(data: any) {
    return this.http.post(`${environment.apiUrl}/api/recetas`, data);
  }

  getrecetaData(idReceta: string) {
    return this.http.get(`${environment.apiUrl}/api/recetas/${idReceta}`);
  }
}
