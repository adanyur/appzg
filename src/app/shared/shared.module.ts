import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterMedicamentoPipe } from './pipe/filter-medicamento.pipe';
import { FilterPacientePipe } from './pipe/filter-paciente.pipe';
import { FilterDiagnosticoPipe } from './pipe/filter-diagnostico.pipe';

@NgModule({
  declarations: [
    ToasterComponent,
    ModulosComponent,
    NavComponent,
    FilterMedicamentoPipe,
    FilterPacientePipe,
    FilterDiagnosticoPipe,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    ToasterComponent,
    NavComponent,
    FilterMedicamentoPipe,
    FilterPacientePipe,
    FilterDiagnosticoPipe,
  ],
})
export class SharedModule {}
