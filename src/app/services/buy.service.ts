import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  carrito = [];
  constructor() { 
    console.log('buyservice is running');
  }

  addCar( id: string, cant: number){
    this.carrito.push({idProduct:id, cantidad:cant} )
  }
  getCar(){
    return this.carrito;
  }
}