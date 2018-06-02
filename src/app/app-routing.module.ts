import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: VideoBackgroundComponent
  },
  {
    path: 'About',
    loadChildren: () => AboutModule
  },
  {
    path: 'Contact',
    loadChildren: () => ContactModule
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
