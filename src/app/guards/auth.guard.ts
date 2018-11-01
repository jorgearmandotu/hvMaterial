import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service'
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  statusLog ;
  res:boolean; 
  constructor (private dataservice: LoginServiceService) {}  
  canActivate() {
    let res;
    this.dataservice.getCurrentUser().subscribe(arg => {
    this.statusLog = arg;
    console.log(arg);
      if(arg['status']){
        res = true;
      }else{
        res = true;
      }
    });
    
    /*this.statusLog.forEach(element => {
      this.res = element['status'];
    });
    return this.res;*/
    return res;
  }
}
