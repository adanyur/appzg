import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  private __modal = new Subject<void>();
  private __refresh = new Subject<void>();

  get modal() {
    return this.__modal;
  }

  get refresh() {
    return this.__refresh;
  }

  getPaciente() {
    return this.http.get(`${environment.apiUrl}/api/clientes`);
  }

  postPaciente(data: any) {
    return this.http
      .post(`${environment.apiUrl}/api/clientes`, data)
      .pipe(tap((_) => this.refresh.next()));
  }
}
