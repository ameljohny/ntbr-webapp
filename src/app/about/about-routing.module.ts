import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { AboutContentBoatraceComponent } from './about-content-boatrace/about-content-boatrace.component';
import { AboutContentVoeComponent } from './about-content-voe/about-content-voe.component';
import { AboutContentNehruTrophyComponent } from './about-content-nehru-trophy/about-content-nehru-trophy.component';

const routes: Routes = [
  {
    path: 'About',
    component: AboutPageComponent,
    children: [
      {
        path: '',
        component: AboutContentComponent,
        pathMatch: 'full',
      },
      {
        path: 'content',
        component: AboutContentComponent,
      },
      {
        path: 'aboutboatrace',
        component: AboutContentBoatraceComponent,
      },
      {
        path: 'aboutvoe',
        component: AboutContentVoeComponent,
      },
      {
        path: 'aboutnehrutrophy',
        component: AboutContentNehruTrophyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
