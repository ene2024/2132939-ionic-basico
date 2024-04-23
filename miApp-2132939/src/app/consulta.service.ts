import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  apiUrl = 'https://fakestoreapi.com/products/';


  constructor(private http: HttpClient ) { }

  getProductos() {    
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProductoDetalle(productId: string) {
    return this.http.get(`${this.apiUrl}/${productId}`);
  }
}
