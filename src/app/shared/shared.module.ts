import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ToasterComponent, ModulosComponent, NavComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ToasterComponent, NavComponent],
})
export class SharedModule {}