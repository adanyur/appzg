import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamedicaRoutingModule } from './agendamedica-routing.module';
import { AgendamedicaComponent } from './agendamedica.component';

@NgModule({
  declarations: [AgendamedicaComponent],
  imports: [CommonModule, AgendamedicaRoutingModule],
})
export class AgendamedicaModule {}
