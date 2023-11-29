import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddProductComponent } from './home-page/add-product/add-product.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
