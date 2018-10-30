import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  statusLog = [];
  res:boolean; 
  constructor (private dataservice: DataService) {}  
  canActivate() {
    this.dataservice.getCurrentUser().subscribe(arg => {
      this.statusLog = arg;
    });
    
    this.statusLog.forEach(element => {
      this.res = element['status'];
    });
    return this.res;
  }
}
