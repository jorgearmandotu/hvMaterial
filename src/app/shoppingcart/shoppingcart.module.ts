import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material'

import { ShoppingcartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingdetailComponent } from './shoppingdetail/shoppingdetail.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingcartRoutingModule,
    MaterialModule
  ],
  declarations: [ShoppingdetailComponent]
})
export class ShoppingcartModule { }
