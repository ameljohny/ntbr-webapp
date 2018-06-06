import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: 'About',
    component: AboutPageComponent,
    children: [

      // {
      //   path: 'content',
      //   component: AboutContentComponent,
      // },
      // {
      //   path: 'aboutboatrace',
      //   component: AboutContentBoatraceComponent,
      // },
      // {
      //   path: 'aboutvoe',
      //   component: AboutContentVoeComponent,
      // },
      // {
      //   path: 'aboutnehrutrophy',
      //   component: AboutContentNehruTrophyComponent,
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
