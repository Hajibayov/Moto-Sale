import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  addProducts(productData: Product) {
    return this.http
      .post(
        'https://moto-sa-default-rtdb.firebaseio.com/products.json',
        productData
      )
      .pipe(map(() => {}));
  }
}
