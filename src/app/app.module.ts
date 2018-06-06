import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MnFullpageModule } from 'ngx-fullpage';


import { AboutRoutingModule } from './about/about-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ContactRoutingModule } from './contact/contact-routing.module';

import { AppComponent } from './app.component';
import { LivepageComponent } from './livepage/livepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAboutComponent } from './page-about/page-about.component';




@NgModule({
  declarations: [
    AppComponent,
    LivepageComponent,
    NavbarComponent,
    VideoBackgroundComponent,
    AccordionPageComponent,
    FooterPageComponent,
    PageNotFoundComponent,
    PageAboutComponent,
  ],
  imports: [AboutModule, ContactModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AboutRoutingModule,
    ContactRoutingModule,
    MnFullpageModule.forRoot(),


  ],
  exports: [FooterPageComponent],
  providers: [MnFullpageModule],
  bootstrap: [AppComponent ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
