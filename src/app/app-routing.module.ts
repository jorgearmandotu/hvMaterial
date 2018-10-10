import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
