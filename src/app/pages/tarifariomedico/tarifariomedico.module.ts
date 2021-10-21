import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifariomedicoRoutingModule } from './tarifariomedico-routing.module';
import { TarifariomedicoComponent } from './tarifariomedico.component';


@NgModule({
  declarations: [TarifariomedicoComponent],
  imports: [
    CommonModule,
    TarifariomedicoRoutingModule
  ]
})
export class TarifariomedicoModule { }
