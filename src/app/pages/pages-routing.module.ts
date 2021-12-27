import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'agendamedica',
        loadChildren: () =>
          import('./agendamedica/agendamedica.module').then(
            (m) => m.AgendamedicaModule
          ),
      },
      {
        path: 'programacion',
        loadChildren: () =>
          import('./programacionsala/programacionsala.module').then(
            (m) => m.ProgramacionsalaModule
          ),
      },
      {
        path: 'tarifariomedico',
        loadChildren: () =>
          import('./tarifariomedico/tarifariomedico.module').then(
            (m) => m.TarifariomedicoModule
          ),
      },
      {
        path: 'resultadomedico',
        loadChildren: () =>
          import('./resultadomedico/resultadomedico.module').then(
            (m) => m.ResultadomedicoModule
          ),
      },
      {
        path: 'recetamedica',
        loadChildren: () =>
          import('./recetamedica/recetamedica.module').then(
            (m) => m.RecetamedicaModule
          ),
      },
      {
        path: 'ordenmedica',
        loadChildren: () =>
          import('./ordenmedica/ordenmedica.module').then(
            (m) => m.OrdenmedicaModule
          ),
      },
      {
        path: 'paciente',
        loadChildren: () =>
          import('./pacientes/pacientes.module').then((m) => m.PacientesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
