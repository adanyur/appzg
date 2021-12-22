import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessagesModalService {
  constructor(
    private _Router: Router,
    private _StorageService: StorageService
  ) {}

  messageConfirmacion() {
    swal
      .fire({
        title: '¿Quiere cerrar session?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'si, OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire(
            `${this._StorageService.userName} Bien Hecho!!`,
            `Usted ha cerrado session`,
            'success'
          );
          this._Router.navigate(['']);
          this._StorageService.clearLocalstorage();
        }
      });
  }

  messageSucces() {
    swal.fire(
      `${this._StorageService.userName} Bien Hecho!!`,
      'Usted, ha iniciado session',
      'success'
    );
  }

  messageSuccesSave(message: string) {
    swal.fire('¡¡Bien Hecho!!', `${message}`, 'success');
  }

  messageConfirma({ title, icon, id }, api: any) {
    swal
      .fire({
        title: title,
        icon: icon,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'si, OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          api
            .deleteReceta(id)
            .subscribe(({ mensaje }) => this.messageSuccesSave(mensaje));
        }
      });
  }
}
