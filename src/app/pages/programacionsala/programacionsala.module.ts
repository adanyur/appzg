import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramacionsalaRoutingModule } from './programacionsala-routing.module';
import { ProgramacionsalaComponent } from './programacionsala.component';


@NgModule({
  declarations: [ProgramacionsalaComponent],
  imports: [
    CommonModule,
    ProgramacionsalaRoutingModule
  ]
})
export class ProgramacionsalaModule { }
