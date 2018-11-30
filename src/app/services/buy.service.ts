import { Injectable } from '@angular/core';
import { carBuy } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  //carrito = [{idProduct:'20', cantidad:10}, {idProduct:'22', cantidad:15}];
  carrito = [];
  constructor(private http:HttpClient) { 
    console.log('buyservice is running');
  }

  addCar(prod:carBuy){
    let user = '12312';
    let existe = false;
    this.carrito.forEach(element => {
      if(element.idProduct == prod.id){
        element.cantidad = prod.cant;
        existe = true;
      }
    });
    if(!existe) {
      this.carrito.push({idProduct:prod.id, cantidad:prod.cant} );
      let carUp= JSON.stringify(this.carrito);
      console.log(carUp);
      return this.http.get<any>('http://localhost/hvbackend/setCartBuy.php?carr='+carUp);

    }
    //let carro = 'id:"'+prod.id+'" cant:"'+prod.cant+'"}';
    //console.log(carro);
    //return this.http.get('http://localhost/hvbackend/setCartBuy.php?id=1?cant='+prod.cant);
    //console.log('http://localhost/hvbackend/setCartBuy.php?id='+ prod.id+'&cant='+prod.cant);
    
  }
  updateShop(carro){
    this.carrito = carro;
     }

  getCar(){
    return this.carrito;
  }
  getCartServer(){
    return this.http.get('http://localhost/hvbackend/setCartBuy.php');
  }
}