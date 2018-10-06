import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('service is running');
   }
   getdata() {
     this.http.get('http://localhost/my-site/');
   }
}
