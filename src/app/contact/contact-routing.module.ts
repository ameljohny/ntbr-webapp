import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactLocationComponent } from './contact-location/contact-location.component';
import { ContactWtcComponent } from './contact-wtc/contact-wtc.component';
import { ContactDodComponent } from './contact-dod/contact-dod.component';
import { ContactFeedbackComponent } from './contact-feedback/contact-feedback.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'Contact',
    component: ContactPageComponent,
    // children: [
    //   {
    //     path: '',
    //     component: ContactWtcComponent,
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'contactfeedback',
    //     component: ContactFeedbackComponent,
    //   },
    //   {
    //     path: 'contactdod',
    //     component: ContactDodComponent,
    //   },
    //   {
    //     path: 'contactwtc',
    //     component: ContactWtcComponent,
    //   },
    //   {
    //     path: 'contactlocation',
    //     component: ContactLocationComponent,
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
