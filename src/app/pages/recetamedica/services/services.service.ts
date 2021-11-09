import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { RecetaMedica } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  moldearData = (data: any) => data.map((value) => new RecetaMedica(value));

  getbandejaRctMedico(fecha: string) {
    return this.http
      .get(`${environment.apiUrl}/api/recetas?medico=04323&fecha=${fecha}`)
      .pipe(map((value) => this.moldearData(value)));
  }
}
