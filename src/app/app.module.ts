import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutRoutingModule } from './about/about-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivepageComponent } from './livepage/livepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutModule } from './about/about.module';


import { AboutPageComponent } from './about/about-page/about-page.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { VerticalNavComponent } from './about/vertical-nav/vertical-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LivepageComponent,
    NavbarComponent,
    VideoBackgroundComponent,
    AccordionPageComponent,
    FooterPageComponent,
    PageNotFoundComponent,
  ],
  imports: [AboutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AboutRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
