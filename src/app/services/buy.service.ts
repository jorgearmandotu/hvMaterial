import { Injectable } from '@angular/core';
import { carBuy } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  //carrito = [{idProduct:'20', cantidad:10}, {idProduct:'22', cantidad:15}];
  carrito = [];
  miStorage = sessionStorage;
  constructor(private http:HttpClient) { 
    console.log('buyservice is running');
    /*try {
      if (localStorage.getItem) {
          this.miStorage = localStorage;
        }
    } catch(e) {
      this.miStorage = {};
    }*/
  }
  addLog(){
    this.miStorage.setItem('log','true');
  }
  delLog(){
    this.miStorage.removeItem('log');
    this.miStorage.removeItem('cartBuy');
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
      
      this.miStorage.setItem('cartBuy', carUp);
      console.log(carUp);
      return this.http.get<any>('http://localhost/hvbackend/setCartBuy.php?carr='+carUp);

    }else { let carUp = JSON.stringify(this.carrito); this.miStorage.setItem('cartBuy', carUp); }
    //let carro = 'id:"'+prod.id+'" cant:"'+prod.cant+'"}';
    //console.log(carro);
    //return this.http.get('http://localhost/hvbackend/setCartBuy.php?id=1?cant='+prod.cant);
    //console.log('http://localhost/hvbackend/setCartBuy.php?id='+ prod.id+'&cant='+prod.cant);
    
  }
  updateShop(carro){
    this.carrito = carro;
     }
  syncronnizeCar(id){
    sessionStorage.getItem(id);
  }
  getCar(){
    var carrito = JSON.parse(this.miStorage.getItem('cartBuy'));
    if(carrito == null){
      this.carrito = [];
    }else{
      this.carrito = carrito;
    }
    
    return this.carrito;
  }
  getCartServer(){
    return this.http.get('http://localhost/hvbackend/setCartBuy.php');
  }
}