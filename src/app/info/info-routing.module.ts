import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: '', component: QuienesSomosComponent, canActivate:[AuthGuard] },
  {path: 'mision', component: MisionComponent },
  {path: 'vision', component: VisionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
