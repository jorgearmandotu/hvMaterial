import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Products } from 'src/app/models/Products';
import { SafePipe } from 'src/app/safe.pipe';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  idP: number;
  product:Products = {
    Idproduct:'',
		nameProduct:'',
		descriptionProduct:'',
		allDescriptionProduct:'',
		price:0,
		urlImage:'',
		category:''
  };

  constructor(private _route: ActivatedRoute,  private dataservice: DataService, private router:Router) {
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

  gotoInicio(){
    let pid = this.idP;
    this.router.navigate(['/inicio', {id:pid, foo: 'foo'}]);
  }

}
