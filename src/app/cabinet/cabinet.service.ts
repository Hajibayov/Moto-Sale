import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CommonFilter } from './product-filter.model';
import { ProductVM } from './products/productVM.model';
import { ResponseListTotal } from '../models/response-list-total.model';
import { ProductDTO } from './products/product-dto.model';

@Injectable({
  providedIn: 'root',
})
export class CabinetService {
  url: string = 'http://localhost:39147/api/v1/';
  constructor(private http: HttpClient) {}

  getProducts(filterModel: CommonFilter): Observable<any> {
    return this.http
      .post<ResponseListTotal<ProductVM>>(
        this.url + 'Product/get-all',
        filterModel
      )
      .pipe(map((res) => res));
  }

  createProducts(productData: ProductDTO): Observable<any> {
    return this.http
      .post<any>(this.url + 'Product/create', productData)
      .pipe(map((res) => res));
  }

  updateProducts(productData: ProductDTO, id: number): Observable<any> {
    return this.http
      .post<any>(this.url + 'Product/update?id=' + id, productData)
      .pipe(map((res) => res));
  }

  deleteProducts( id: number): Observable<any> {
    return this.http
      .delete<any>(this.url + 'Product/delete?id=' + id)
      .pipe(map((res) => res));
  }
}
