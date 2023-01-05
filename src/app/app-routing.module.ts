import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetOurCaregiverComponent } from './pages/meet-our-caregiver/meet-our-caregiver.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ServiceLocationComponent } from './pages/service-location/service-location.component';
import { ServiceComponent } from './pages/service/service.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'servicelocation', component: ServiceLocationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'meet-our-caregivers', component: MeetOurCaregiverComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'careers', component: CareersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
