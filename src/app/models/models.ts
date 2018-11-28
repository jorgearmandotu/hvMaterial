

export interface StatusLog {
  'status': boolean;
}

export interface ImagenData {
  'url': string;
  'alt': string;
  'description': String;
}

export interface User {
  'user': string;
  'password': string;
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

export interface RegisterData {
  'names' : string,
  'lastNames': string,
  'id': string,
  'email': string,
  'phone': string,
  'user': string,
  'password': string
}