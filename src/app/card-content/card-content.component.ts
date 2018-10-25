import { ImagenData } from './../models/models';
import { DataService } from './../data.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})

export class CardContentComponent implements OnInit {

  @Input() public title;
  productsAllData = [];

  constructor(private dataService: DataService) {
    //console.log(this.products);
    //this.dataService.getCategoryProducts(this.products).subscribe(arg => {
      //this.productsAllData = arg;
    //});
   }

  ngOnInit() {
  }

}
