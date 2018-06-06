import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { AboutPageComponent } from './about-page/about-page.component';

import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';



@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [
    AboutPageComponent,
    VerticalNavComponent
  ]
})
export class AboutModule {}
