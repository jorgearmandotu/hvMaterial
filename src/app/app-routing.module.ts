
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { LoginComponent } from './auth/login/login.component';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  { path: 'inicio', component: ContentComponent },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'info', loadChildren: './info/info.module#InfoModule'},
  { path: 'detalle', loadChildren: './products/products.module#ProductsModule'},
 // { path: 'products', loadChildren: './products/products.model#ProductsModel'},
  { path: '**', component: NotFoundComponent },
  //{ path: 'not-found', component: NotFoundComponent },
  //{ path: '**', redirectTo: '/not-found' },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
