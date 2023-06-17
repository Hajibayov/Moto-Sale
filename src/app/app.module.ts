import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ServerComponent } from './server/server.component';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
  MomentDateModule,
} from '@angular/material-moment-adapter';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home-page/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './home-page/cards/cards.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogsComponent } from './home-page/blogs/blogs.component';
import { NewsletterComponent } from './home-page/newsletter/newsletter.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TeamComponent } from './about-us/team/team.component';
import { StoryComponent } from './about-us/story/story.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LiveBackgroundComponent } from './live-background/live-background.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'About-us', component: AboutUsComponent },
  { path: 'Faqs', component: FaqsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Wishlist', component: WishlistComponent },
];

export const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MessageDialogComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    FooterComponent,
    BlogsComponent,
    NewsletterComponent,
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
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    SlickCarouselModule,
    DragDropModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
