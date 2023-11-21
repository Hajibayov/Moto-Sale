import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddProductComponent } from './home-page/add-product/add-product.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'About-us', component: AboutUsComponent },
  { path: 'Faqs', component: FaqsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Wishlist', component: WishlistComponent },
  { path: 'Add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
