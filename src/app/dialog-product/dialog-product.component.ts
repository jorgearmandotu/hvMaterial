import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Products } from '../models/Products';
import { order } from '../models/order';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit {

  prod = {
    idProd:"",
    cant: 1
  }

  constructor(public dialogRef: MatDialogRef<DialogProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Products, private buyservice:BuyService) {
      console.log(data);
      alert(data.Idproduct);
      this.prod.idProd = data.Idproduct;
     }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addCar(){
    alert(this.prod.idProd);
    //this.buyservice.addCar();
  }
}
