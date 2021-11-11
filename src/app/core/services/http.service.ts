import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Paciente, Diagnosticos } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  modelarDataPacienteSearch = (data: any) =>
    data.map((data) => new Paciente(data));

  getPacienteSearch() {
    return this.http
      .get(`${environment.apiUrl}/api/clientes`)
      .pipe(map((value) => this.modelarDataPacienteSearch(value)));
  }

  getDatosDelMedico(codigoMedico: string) {
    return this.http.get(
      `${environment.apiUrl}/api/catalogo/filtrar-medico?cmp=${codigoMedico}`
    );
  }

  getsearchMedicamentos(searchText: string) {
    return this.http.get(
      `${environment.apiUrl}/api/medicamento/filtrar-medicamento/${searchText}`
    );
  }

  modelarDataDiagnostico = (data: any) =>
    data.map((data) => new Diagnosticos(data));

  getDiagnostico() {
    return this.http
      .get(`${environment.apiUrl}/api/catalogo/filtrar-catalogo/ADM_DX_MAE`)
      .pipe(map((data) => this.modelarDataDiagnostico(data)));
  }
}
