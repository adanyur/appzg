import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { RecetaMedica } from '../models';

import { StorageService } from '../../../core/services';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(
    private http: HttpClient,
    private StorageService: StorageService
  ) {}

  moldearData = (data: any) => data.map((value) => new RecetaMedica(value));

  getbandejaRctMedico(fecha: string) {
    return this.http
      .get(
        `${environment.apiUrl}/api/recetas?medico=${this.StorageService.codigoCmp}&fecha=${fecha}`
      )
      .pipe(map((value) => this.moldearData(value)));
  }

  postRegistroRecetaMedica(data: any) {
    return this.http.post(`${environment.apiUrl}/api/recetas`, data);
  }

  viewPDF(idReceta: number) {
    return this.http.get(
      `${environment.apiUrl}/api/pdf/generate?idfactura=${idReceta}`
    );
  }
}
