import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarifariomedicoComponent } from './tarifariomedico.component';

const routes: Routes = [{ path: '', component: TarifariomedicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarifariomedicoRoutingModule {}
