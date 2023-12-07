import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './home-page/faqs/faqs.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { WishlistComponent } from './home-page/wishlist/wishlist.component';
import { AddProductComponent } from './home-page/add-product/add-product.component';
import { AllBlogsComponent } from './home-page/all-blogs/all-blogs.component';
import { HomePageModule } from './home-page/home-page.module';
import { HomeComponent } from './home-page/home/home.component';
import { CabinetModule } from './cabinet/cabinet.module';
import { CabinetComponent } from './cabinet/cabinet.component';
import { ProductsComponent } from './cabinet/products/products.component';

const appRoute: Routes = [
  HomePageModule.childRoutes([
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    {
      path: 'About-us',
      component: AboutUsComponent,
      data: {
        title: 'About-us',
        breadcrumb: [
          {
            label: 'About-us',
            url: '/About-us',
          },
        ],
      },
    },
    {
      path: 'Faqs',
      component: FaqsComponent,
      data: {
        title: 'Faqs',
        breadcrumb: [
          {
            label: 'Faqs',
            url: '/Faqs',
          },
        ],
      },
    },
    {
      path: 'Contact',
      component: ContactComponent,
      data: {
        title: 'Contact',
        breadcrumb: [
          {
            label: 'Contact',
            url: '/Contact',
          },
        ],
      },
    },
    {
      path: 'Wishlist',
      component: WishlistComponent,
      data: {
        title: 'Wishlist',
        breadcrumb: [
          {
            label: 'Wishlist',
            url: '/Wishlist',
          },
        ],
      },
    },
    { path: 'Add', component: AddProductComponent },
    {
      path: 'Blogs',
      component: AllBlogsComponent,
      data: {
        title: 'Blogs',
        breadcrumb: [
          {
            label: 'Blogs',
            url: '/Blogs',
          },
        ],
      },
    },
  ]),
  CabinetModule.childRoutes([
    { path: 'Cabinet', component: ProductsComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
