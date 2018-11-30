import { DataService } from './../data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ProductsModule } from '../products/products.module';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {

  categorys = [];
  statusLog: boolean = false;
  constructor(private dataservice: DataService, public dialog: MatDialog, private loginservice:LoginServiceService) {
    this.dataservice.getAllProducts().subscribe(arg => {
      this.categorys = arg;
    }); 
   } 
  ngOnInit() {
    this.onCheckUser();
  }

  setCar(id, name, price, description, image): void{
    const dialogRef = this.dialog.open(DialogProductComponent, {
      width: '600px',
      data: {idProduct: id, name: name, price: price, description: description, urlImage: image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  onCheckUser() {
    this.loginservice.getCurrentUser().subscribe(arg => {
        if(arg['status']){
          this.statusLog = true;
        }else{
          this.statusLog = true;
        }
      });
  }

}



