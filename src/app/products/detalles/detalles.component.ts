import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  idP: number;
  product = [];

  constructor(private _route: ActivatedRoute,  private dataservice: DataService) {
    let id = this._route.snapshot.paramMap.get('id');
    this.idP = +id;
    this.dataservice.getDetailProduct(this.idP).subscribe(arg => {
      this.product = arg;
      console.log(this.product);
    });
    //console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    //let id = this._route.snapshot.paramMap.get('id');
    //alert('el id es '+id);
    

  }

}
