import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-pacientes-listado',
  templateUrl: './pacientes-listado.component.html',
  styleUrls: ['./pacientes-listado.component.css'],
})
export class PacientesListadoComponent implements OnInit {
  p: number = 0;

  pacientes$: Observable<any>;

  constructor(private ServicesService: ServicesService) {}

  ngOnInit(): void {
    this.getPacientes();
    this.ServicesService.refresh.subscribe((_) => this.getPacientes());
  }

  getPacientes() {
    this.pacientes$ = this.ServicesService.getPaciente();
  }

  openModal() {
    this.ServicesService.modal.next();
  }
}
