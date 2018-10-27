import { Info, Category, ProductsCategory } from './models/models';
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
     return this.http.get<ImageData[]>('http://localhost/hvbackend/');
   }
   getAllProducts() {
     return this.http.get<any[]>('http://localhost/hvbackend/productsCategory.php');
   }

   getDetailProduct(id: String) {
     return this.http.get<any>('http://localhost/hvbackend/detailProduct.php');
   }
   getCategoryProducts(category: String) {
    return this.http.get<Products[]>('http://localhost/hvbackend/allproducts.php?category=' + category);
    //return this.http.post<Products[]>('http://localhost/my-site/allproducts.php', category);
  }
  getAllCategory(){
    return this.http.get<Category[]>('http://localhost/hvbackend/allcategorys.php');
  }
  getMision() {
    return this.http.get<Info[]>('http://localhost/hvbackend/allproducts.php');
  }
  setLogin(user: String, password) {
    this.http.post('http://localhost/hvbackend/loguear.php', user, password);
  }
}
