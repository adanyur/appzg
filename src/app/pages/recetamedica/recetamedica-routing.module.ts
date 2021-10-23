import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetamedicaComponent } from './recetamedica.component';
import { RecetamedicaListadoComponent } from './recetamedica-listado/recetamedica-listado.component';
import { RecetamedicaRegistrarComponent } from './recetamedica-registrar/recetamedica-registrar.component';

const routes: Routes = [
  {
    path: '',
    component: RecetamedicaComponent,
    children: [
      { path: '', component: RecetamedicaListadoComponent },
      { path: 'registrar', component: RecetamedicaRegistrarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetamedicaRoutingModule {}
