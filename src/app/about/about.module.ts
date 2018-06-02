import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';


import { AboutPageComponent } from './about-page/about-page.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
  ],
  declarations: [AboutPageComponent, AboutContentComponent, VerticalNavComponent]
})
export class AboutModule { }
