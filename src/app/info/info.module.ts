import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,
    FormsModule
  ],
  declarations: [MisionComponent, VisionComponent, QuienesSomosComponent]
})
export class InfoModule { }
