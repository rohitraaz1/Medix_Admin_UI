import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product.model';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  mediX_token: string;
  constructor(private _http: HttpClient) {
    this.mediX_token = localStorage.getItem('mediX_Auth') || '';
  }

  
  //Get Products
  getProducts():Observable<Product[]>{
    const url = baseUrl + 'api/Products';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.mediX_token,
    };
    return this._http.get<Product[]>(url,{headers});
  }

  //Add Product
  addProduct(product:Product):Observable<Product>{
    const url = baseUrl + 'api/Products';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.mediX_token,
    };
    return this._http.post<Product>(url,product,{headers});
  }

  //Edit Product
  editProduct(prod_Id:string,product:Product):Observable<any>{
    const url = baseUrl + 'api/Products/' + prod_Id;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.mediX_token,
    };
    return this._http.put<Product>(url,product,{headers});
  }

  //Delete Product
  deleteProduct(prod_Id:string):Observable<any>{
    const url = baseUrl + 'api/Products/' + prod_Id;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.mediX_token,
    };
    return this._http.delete(url,{headers});
  }

}
