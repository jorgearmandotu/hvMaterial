import { DataService } from './../data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ProductsModule } from '../products/products.module';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';


@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {

  categorys = [];
  constructor(private dataservice: DataService, public dialog: MatDialog) {
    this.dataservice.getAllProducts().subscribe(arg => {
      this.categorys = arg;
    }); 
   } 
  ngOnInit() {
  }

  setCar(id, name, price, description, image): void{
    const dialogRef = this.dialog.open(DialogProductComponent, {
      width: '600px',
      data: {id: id, name: name, price: price, description: description, urlImage: image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}

@Component({
  selector: 'detailProduct',
  templateUrl: 'detailProduct.html',
})

