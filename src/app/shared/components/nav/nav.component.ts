import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private _StorageService: StorageService,
    private _Router: Router
  ) {}
  userName: string;
  ngOnInit(): void {
    this.userName = this._StorageService.userName;
  }

  logout(): void {
    let username = this._StorageService.userName;
    swal
      .fire({
        title: '¿Quiere cerrar session?',
        // text: "You won't be able to revert this!",
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
}
