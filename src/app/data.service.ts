import { Products } from './models/Products';
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
     return this.http.get<ImageData[]>('http://localhost/my-site/');
   }
   getAllProducts() {
     return this.http.get<Products[]>('http://localhost/my-site/allproducts.php');
   }
   etAllProducts(category: String) {
    return this.http.get<Products[]>('http://localhost/my-site/allproducts.php?category=' + category);
    //return this.http.post<Products[]>('http://localhost/my-site/allproducts.php', category);
  }
}
