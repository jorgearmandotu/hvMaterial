import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {

  categorys = [];
  constructor(private dataservice: DataService) {
    this.dataservice.getAllProducts().subscribe(arg => {
      this.categorys = arg;
    });
   }
  ngOnInit() {
  }

}
