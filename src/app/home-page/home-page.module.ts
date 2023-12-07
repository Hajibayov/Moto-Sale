import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from '../dialogs/message-dialog/message-dialog.component';
import { HeaderComponent } from '../shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HomePageComponent } from './home-page.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { TeamComponent } from '../about-us/team/team.component';
import { StoryComponent } from '../about-us/story/story.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { LiveBackgroundComponent } from './live-background/live-background.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductDialogComponent } from '../dialogs/view-product-dialog/view-product-dialog.component';
import { CollectionComponent } from './collection/collection.component';
import { ClientsComponent } from './clients/clients.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MessageDialogComponent,
    HomeComponent,
    CardsComponent,
    BlogsComponent,
    HomePageComponent,
    AboutUsComponent,
    TeamComponent,
    StoryComponent,
    FaqsComponent,
    ExpansionPanelComponent,
    ContactComponent,
    FormComponent,
    WishlistComponent,
    DragDropComponent,
    LiveBackgroundComponent,
    BenefitsComponent,
    AddProductComponent,
    ViewProductDialogComponent,
    CollectionComponent,
    ClientsComponent,
    AddBlogsComponent,
    AllBlogsComponent,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    NgbModule,
    SlickCarouselModule,
    DragDropModule,
    CarouselModule,
    ButtonModule,
    RouterModule,
    NgDynamicBreadcrumbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class HomePageModule {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: HomePageComponent,
      children: routes,
      data: { reuse: true },
    };
  }
}
