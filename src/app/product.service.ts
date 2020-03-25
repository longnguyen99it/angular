import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api= 'https://5e7a211a17314d0016133d83.mockapi.io/products';
  products:Product;
  constructor( private http:HttpClient) { }

  getProduct():Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProductId(id):Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  updateProduct(product){
    return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
  removerProduct(id){
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}
