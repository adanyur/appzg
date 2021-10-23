import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramacionsalaComponent } from './programacionsala.component';

const routes: Routes = [{ path: '', component: ProgramacionsalaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramacionsalaRoutingModule {}
