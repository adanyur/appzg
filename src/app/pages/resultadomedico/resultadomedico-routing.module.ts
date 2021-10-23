import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadomedicoComponent } from './resultadomedico.component';

const routes: Routes = [{ path: '', component: ResultadomedicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadomedicoRoutingModule {}
