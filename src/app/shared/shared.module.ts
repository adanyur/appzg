import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToasterComponent } from './components/toaster/toaster.component';

@NgModule({
  declarations: [ToasterComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ToasterComponent],
})
export class SharedModule {}
