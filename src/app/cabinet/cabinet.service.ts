import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CommonFilter } from './common-filter.model';
import { ProductVM } from './products/productVM.model';
import { ResponseListTotal } from '../models/response-list-total.model';
import { ProductDTO } from './products/product-dto.model';
import { EmployeeVM } from './employees/employeeVM.model';
import { BlogVM } from './blogs/blogVM.model';
import { BlogDTO } from './blogs/blogDto.model';

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

  deleteProducts(id: number): Observable<any> {
    return this.http
      .delete<any>(this.url + 'Product/delete?id=' + id)
      .pipe(map((res) => res));
  }

  getEmployees(filterModel: CommonFilter): Observable<any> {
    return this.http
      .post<ResponseListTotal<EmployeeVM>>(
        this.url + 'Employee/get-all',
        filterModel
      )
      .pipe(map((res) => res));
  }

  createEmployee(employeeData: EmployeeVM): Observable<any> {
    return this.http
      .post<any>(this.url + 'Employee/create', employeeData)
      .pipe(map((res) => res));
  }

  updateEmployee(employeeData: EmployeeVM, id: number): Observable<any> {
    return this.http
      .post<any>(this.url + 'Employee/update?id=' + id, employeeData)
      .pipe(map((res) => res));
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http
      .delete<any>(this.url + 'Employee/delete?id=' + id)
      .pipe(map((res) => res));
  }

  getBlogs(filterModel: CommonFilter): Observable<any> {
    return this.http
      .post<ResponseListTotal<BlogVM>>(this.url + 'Blog/get-all', filterModel)
      .pipe(map((res) => res));
  }

  createBlog(blogData: BlogDTO): Observable<any> {
    return this.http
      .post<any>(this.url + 'Blog/create', blogData)
      .pipe(map((res) => res));
  }

  updateBlog(blogData: BlogDTO, id: number): Observable<any> {
    return this.http
      .post<any>(this.url + 'Blog/update?id=' + id, blogData)
      .pipe(map((res) => res));
  }

  deleteBlog(id: number): Observable<any> {
    return this.http
      .delete<any>(this.url + 'Blog/delete?id=' + id)
      .pipe(map((res) => res));
  }

  getBrands(): Observable<any> {
    return this.http
      .get(this.url + 'Lookup/get-brands')
      .pipe(map((res) => res));
  }
  getCategories(): Observable<any> {
    return this.http
      .get(this.url + 'Lookup/get-categories')
      .pipe(map((res) => res));
  }
}
