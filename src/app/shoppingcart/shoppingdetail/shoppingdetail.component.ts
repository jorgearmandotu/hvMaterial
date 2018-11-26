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
  constructor( carservice:BuyService, private dataservice:DataService) {
    this.carrito = carservice.getCar();
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
    console.log('detalles de carrro');
      console.log(this.carritoDeatil);
  }

  ngOnInit() {
  }

}
