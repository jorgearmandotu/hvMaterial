import { ImagenData } from './../ImagenData';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})

export class CardContentComponent implements OnInit {

  productsAllData = [];

  constructor(private dataService: DataService) {
    this.dataService.getAllProducts().subscribe(arg => {
      this.productsAllData = arg;
    });
   }

  ngOnInit() {
  }

}
