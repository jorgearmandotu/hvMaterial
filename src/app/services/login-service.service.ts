import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/models'
import { StatusLog } from '../models/models'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http: HttpClient ) { 
    console.log('loginservice is running');
  } 
  setLogin(user:User) {
    return this.http.post<StatusLog>('http://localhost/hvbackend/loguear.php', user);
    //return this.http.post<Products[]>('http://localhost/my-site/allproducts.php', category);
    
  }
  getCurrentUser(){
    return this.http.get<StatusLog>('http://localhost/hvbackend/validLogin.php');
   }
}
