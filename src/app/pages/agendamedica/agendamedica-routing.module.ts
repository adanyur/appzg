import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamedicaComponent } from './agendamedica.component';

const routes: Routes = [{ path: '', component: AgendamedicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamedicaRoutingModule {}
