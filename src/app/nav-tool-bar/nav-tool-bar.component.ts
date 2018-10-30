import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-nav-tool-bar',
  templateUrl: './nav-tool-bar.component.html',
  styleUrls: ['./nav-tool-bar.component.css']
})
export class NavToolBarComponent implements OnInit {

  statusLog = [];
  //dataservice: DataService;
  constructor(private dataservice: DataService) { 
    this.dataservice.getCurrentUser().subscribe(arg => {
      this.statusLog = arg;
    }); 
    console.log(this.statusLog); 
  }

  ngOnInit() {
  }

}
