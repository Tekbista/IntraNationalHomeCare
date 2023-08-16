import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetOurCaregiverComponent } from './pages/meet-our-caregiver/meet-our-caregiver.component';
import { NonDescriminationPoliciesComponent } from './pages/non-descrimination-policies/non-descrimination-policies.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ServiceLocationComponent } from './pages/service-location/service-location.component';
import { ServiceOfferComponent } from './pages/service-offer/service-offer.component';
import { ServiceComponent } from './pages/service/service.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'servicelocation', component: ServiceLocationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'meet-our-caregivers', component: MeetOurCaregiverComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'non-descrimination-policies', component: NonDescriminationPoliciesComponent},
  {path: 'service-offer', component: ServiceOfferComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
