import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { Blog } from '../models/blog.model';

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

  getProducts() {
    return this.http
      .get('https://moto-sa-default-rtdb.firebaseio.com/products.json')
      .pipe(
        map((responseData) => {
          const productsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsArray.push({ ...responseData[key], id: key });
            }
          }
          return productsArray;
        })
      );
  }

  addBlog(blogData: Blog) {
    return this.http
      .post('https://moto-sa-default-rtdb.firebaseio.com/blogs.json', blogData)
      .pipe(map(() => {}));
  }
}
