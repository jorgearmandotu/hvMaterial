export interface ImagenData {
  'url': String;
  'alt': String;
  'description': String;
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
