import { Component, OnInit } from '@angular/core';
import { BuyService } from 'src/app/services/buy.service';
import { DataService } from 'src/app/data.service';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-shoppingdetail',
  templateUrl: './shoppingdetail.component.html',
  styleUrls: ['./shoppingdetail.component.css']
})
export class ShoppingdetailComponent implements OnInit {
  carrito = [];
  carritoDeatil = [];
  totalPay = 0;
  product:Products = {
    Idproduct:'',
		nameProduct:'',
		descriptionProduct:'',
		allDescriptionProduct:'',
		price:0,
		urlImage:'',
    category:'',
    
  };
  compras = false;
  constructor(private carservice:BuyService, private dataservice:DataService) {
    
    console.log('detalles de carrro');
      console.log(this.carritoDeatil);
  }

  ngOnInit() {
    this.carrito = this.carservice.getCar();
    if(this.carrito.length > 0) {
      this.compras = true;
      this.carrito.forEach(element => {
        this.dataservice.getDetailProduct(element.idProduct).subscribe(arg => {
          this.product = arg;
          this.carritoDeatil.push(this.product);
          this.totalPay +=this.product.price * element.cantidad;
          });
      });
    }
  }

  delShop(id){
    this.carrito.forEach(element => {
      if(element.idProduct == id){
        let index = this.carrito.indexOf(element);
        this.carritoDeatil.splice(index, 1);
        this.carrito.splice(index, 1);
        
        console.log(this.carrito.indexOf(element));
        return;
        }
      });
    console.log('deletear A '+id);
    console.log('este es carrito '+this.carrito.length);
    if(this.carrito.length > 0) {
      //this.compras = true;
      this.totalPay = 0;
      this.carrito.forEach(element => {
        this.dataservice.getDetailProduct(element.idProduct).subscribe(arg => {
          this.product = arg;
          //this.carritoDeatil.push(this.product);
          this.totalPay +=this.product.price * element.cantidad;
          });
      });
    }else{
      this.compras = false;
    }
    this.carservice.updateShop(this.carrito)
    //this.ngOnInit();
    //location.reload();
  }
  
}
