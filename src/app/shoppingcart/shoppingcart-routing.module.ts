import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingdetailComponent } from './shoppingdetail/shoppingdetail.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: ShoppingdetailComponent/*, canActivate: [AuthGuard]*/ },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingcartRoutingModule { }

