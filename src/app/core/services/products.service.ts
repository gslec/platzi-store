import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../product/components/product/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private http: HttpClient) {

  }


  getAllProducts() {
    return this.http.get<Product[]>(environment.URL_API);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.URL_API}${id}`);
  }
}
