import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { PacientesComponent } from './pacientes.component';
import { PacientesListadoComponent } from './pacientes-listado/pacientes-listado.component';
import { PacientesRegistrarEditarComponent } from './pacientes-registrar-editar/pacientes-registrar-editar.component';

@NgModule({
  declarations: [
    PacientesComponent,
    PacientesListadoComponent,
    PacientesRegistrarEditarComponent,
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class PacientesModule {}
