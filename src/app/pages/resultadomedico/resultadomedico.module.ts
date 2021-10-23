import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadomedicoRoutingModule } from './resultadomedico-routing.module';
import { ResultadomedicoComponent } from './resultadomedico.component';


@NgModule({
  declarations: [ResultadomedicoComponent],
  imports: [
    CommonModule,
    ResultadomedicoRoutingModule
  ]
})
export class ResultadomedicoModule { }
