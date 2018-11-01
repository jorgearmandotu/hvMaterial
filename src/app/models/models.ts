export interface StatusLog {
  'status': boolean;
}

export interface ImagenData {
  'url': String;
  'alt': String;
  'description': String;
}

export interface User {
  'user': String;
  'password': String;
}
export interface UserData {
  'id': String;
  'name': String;
  'lastName': String;
  'email': String;
  'phone': String;
  'password': String;
  'administrador': boolean;
}

export interface Category {
  'idCategoria': String;
  'name': String;
}

export interface Info {
  'id': String;
  'name': String;
  'title': String;
  'content': String;
}
export interface ProductsCategory {
  'id': String;
  'nombre': String;
  'products': any;
}