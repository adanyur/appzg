import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenmedicaComponent } from './ordenmedica.component';
import { OrdenmedicaListadoComponent } from './ordenmedica-listado/ordenmedica-listado.component';
import { OrdenmedicaRegistrarComponent } from './ordenmedica-registrar/ordenmedica-registrar.component';

const routes: Routes = [
  {
    path: '',
    component: OrdenmedicaComponent,
    children: [
      { path: '', component: OrdenmedicaListadoComponent },
      { path: 'registrar', component: OrdenmedicaRegistrarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenmedicaRoutingModule {}
