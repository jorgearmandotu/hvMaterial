import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { LoginServiceService } from '../services/login-service.service';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-nav-tool-bar',
  templateUrl: './nav-tool-bar.component.html',
  styleUrls: ['./nav-tool-bar.component.css']
})
export class NavToolBarComponent implements OnInit {

  statusLog;
  //dataservice: DataService;
  constructor(private dataservice: LoginServiceService) { 
    this.dataservice.getCurrentUser().subscribe(arg => {
      this.statusLog = arg['status'];
    }); 
    console.log(this.statusLog); 
    if(this.statusLog){
      console.log('status es true en nabbar component');
    }else{
      console.log('status es false pre');
    }
  }

  ngOnInit() {
    this.dataservice.getCurrentUser().subscribe(arg => {
      this.statusLog = arg['status'];
    }); 
    console.log(this.statusLog); 
    if(this.statusLog){
      console.log('status es true en nabbar component');
    }else{
      console.log('status es false pre');
    }
  }

}
