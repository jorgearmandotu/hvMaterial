import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Products } from '../models/Products';
import { carBuy } from '../models/order';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit {
  data;
  prod = {
    id:"",
    cant: 1
  };
  carrito;

  constructor(public dialogRef: MatDialogRef<DialogProductComponent>,
    @Inject(MAT_DIALOG_DATA)  dataP, private buyservice:BuyService) {
      console.log(dataP);
      this.data = dataP;
      this.prod.id = this.data.idProduct;
      this.carrito = this.buyservice.getCar();
      console.log(this.carrito);
      if(this.carrito.length>0){
        console.log(this.carrito);
        this.carrito.forEach(element => {
          if(element.idProduct == this.prod.id){
            this.prod.cant = element.cantidad; 
          }
        });
      }
      else {
        console.log(this.carrito.length);
      }
     }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addCar(){
    this.buyservice.addCar(this.prod);
    this.dialogRef.close();
  }
}
