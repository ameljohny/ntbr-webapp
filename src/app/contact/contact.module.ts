import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactWtcComponent } from './contact-wtc/contact-wtc.component';
import { ContactFeedbackComponent } from './contact-feedback/contact-feedback.component';
import { ContactDodComponent } from './contact-dod/contact-dod.component';
import { ContactLocationComponent } from './contact-location/contact-location.component';
import { VerticalNavContactComponent } from './vertical-nav-contact/vertical-nav-contact.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [
    ContactWtcComponent,
    ContactFeedbackComponent,
    ContactDodComponent,
    ContactLocationComponent,
    ContactPageComponent,
    VerticalNavContactComponent,
  ]
})
export class ContactModule {}
