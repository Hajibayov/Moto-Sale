import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { CabinetComponent } from './cabinet.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './fixed-part/sidebar/sidebar.component';
import { HeaderComponent } from './fixed-part/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EmployeesComponent } from './employees/employees.component';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    CabinetComponent,
    SidebarComponent,
    HeaderComponent,
    ProductsComponent,
    BlogsComponent,
    EmployeesComponent,
    NewProductDialogComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
  ],
})
export class CabinetModule {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: CabinetComponent,
      children: routes,
      data: { reuse: true },
    };
  }
}
