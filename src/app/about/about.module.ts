import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { AboutPageComponent } from './about-page/about-page.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { AboutContentBoatraceComponent } from './about-content-boatrace/about-content-boatrace.component';
import { AboutContentVoeComponent } from './about-content-voe/about-content-voe.component';
import { AboutContentNehruTrophyComponent } from './about-content-nehru-trophy/about-content-nehru-trophy.component';



@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [
    AboutPageComponent,
    AboutContentComponent,
    VerticalNavComponent,
    AboutContentBoatraceComponent,
    AboutContentVoeComponent,
    AboutContentNehruTrophyComponent
  ]
})
export class AboutModule {}
