import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { RecetamedicaRoutingModule } from './recetamedica-routing.module';
import { RecetamedicaComponent } from './recetamedica.component';
import { RecetamedicaListadoComponent } from './recetamedica-listado/recetamedica-listado.component';
import { RecetamedicaRegistrarComponent } from './recetamedica-registrar/recetamedica-registrar.component';
import { RecetamedicaAcordeonComponent } from './recetamedica-listado/recetamedica-acordeon.component';

@NgModule({
  declarations: [
    RecetamedicaComponent,
    RecetamedicaListadoComponent,
    RecetamedicaRegistrarComponent,
    RecetamedicaAcordeonComponent,
  ],
  imports: [
    CommonModule,
    RecetamedicaRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
})
export class RecetamedicaModule {}
