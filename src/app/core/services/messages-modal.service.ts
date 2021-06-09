import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessagesModalService {
  userName: string;
  constructor(
    private _Router: Router,
    private _StorageService: StorageService
  ) {
    this.userName = this._StorageService.userName;
  }

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
            `${this.userName} Bien Hecho!!`,
            `Usted ha cerrado session`,
            'success'
          );
          this._Router.navigate(['']);
        }
      });
  }

  messageSucces() {
    swal.fire(
      `${this.userName} Bien Hecho!!`,
      'Usted, ha iniciado session',
      'success'
    );
  }
}
