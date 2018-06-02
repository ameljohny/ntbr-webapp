import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { AboutModule } from './about/about.module';

const routes: Routes = [

  {
    path: 'Home',
    component: VideoBackgroundComponent
  },
  {
    path: 'About',
    loadChildren: () => AboutModule
  },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
