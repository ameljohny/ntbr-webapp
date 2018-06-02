import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'About',
    component: AboutPageComponent,
    children: [
      {
        path: '',
        component:  AboutContentComponent,
        pathMatch: 'full'
      },
      {
        path: 'content',
        component: AboutContentComponent
      },
      {
        path: 'pageNotFound',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule { }
