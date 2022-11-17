import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts():Observable<Product[]> {
    return this.http.get <Product[]> (environment.url_api);
  }
  getProduct(id:string):Observable<Product> {
    return this.http.get <Product> (environment.url_api.concat("/",id))
  }
  createProduct(product:Product):Observable<Product>{
    return this.http.post <Product> (environment.url_api, product)
  }
  updateProduct(id:string, change: Partial <Product>):Observable<Product>{
    return this.http.put <Product> (environment.url_api.concat("/",id),change)
  }
  deleteProduct(id:string){
    return this.http.delete <Product> (environment.url_api.concat("/",id));
  }
}
