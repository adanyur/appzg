import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetamedicaRoutingModule } from './recetamedica-routing.module';
import { RecetamedicaComponent } from './recetamedica.component';
import { RecetamedicaListadoComponent } from './recetamedica-listado/recetamedica-listado.component';
import { RecetamedicaRegistrarComponent } from './recetamedica-registrar/recetamedica-registrar.component';


@NgModule({
  declarations: [RecetamedicaComponent, RecetamedicaListadoComponent, RecetamedicaRegistrarComponent],
  imports: [
    CommonModule,
    RecetamedicaRoutingModule
  ]
})
export class RecetamedicaModule { }
