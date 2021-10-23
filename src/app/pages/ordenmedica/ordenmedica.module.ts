import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenmedicaRoutingModule } from './ordenmedica-routing.module';
import { OrdenmedicaComponent } from './ordenmedica.component';
import { OrdenmedicaListadoComponent } from './ordenmedica-listado/ordenmedica-listado.component';
import { OrdenmedicaRegistrarComponent } from './ordenmedica-registrar/ordenmedica-registrar.component';


@NgModule({
  declarations: [OrdenmedicaComponent, OrdenmedicaListadoComponent, OrdenmedicaRegistrarComponent],
  imports: [
    CommonModule,
    OrdenmedicaRoutingModule
  ]
})
export class OrdenmedicaModule { }
