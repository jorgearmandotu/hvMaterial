import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { LoginServiceService } from '../services/login-service.service';
import { AuthGuard } from '../guards/auth.guard';
import { BuyService } from '../services/buy.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-tool-bar',
  templateUrl: './nav-tool-bar.component.html',
  styleUrls: ['./nav-tool-bar.component.css']
})
export class NavToolBarComponent implements OnInit {

  statusLog = false;
  usuario = 'usuarioOutLogin';
  //dataservice: DataService;
  constructor(private dataservice: LoginServiceService, private buyservice:BuyService, private router:Router) { 
    this.dataservice.getCurrentUser().subscribe(arg => {
      this.statusLog = arg['status'];
    }); 
    console.log(this.statusLog); 
    if(this.statusLog){
      buyservice.addLog;
      console.log('status es true en nabbar component');
    }else{
      console.log('status es false pre');
      buyservice.delLog;
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

  logout(){
    console.log('cerrando sesssion');
    this.dataservice.logout().subscribe(arg => {
    });
    this.buyservice.delLog();
    this.router.navigate(['/inicio']);
    //location.reload();
  }

}
