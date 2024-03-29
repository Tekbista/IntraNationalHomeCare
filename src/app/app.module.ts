import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceLocationComponent } from './pages/service-location/service-location.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlidingBannerComponent } from './components/sliding-banner/sliding-banner.component';
import { ServiceLocationCardComponent } from './components/service-location-card/service-location-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MeetOurCaregiverComponent } from './pages/meet-our-caregiver/meet-our-caregiver.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ServiceCardsComponent } from './components/service-cards/service-cards.component';
import { NonDescriminationPoliciesComponent } from './pages/non-descrimination-policies/non-descrimination-policies.component';
import { ServiceOfferComponent } from './pages/service-offer/service-offer.component';
import { ErrorComponent } from './pages/error/error.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutusComponent,
    ServiceComponent,
    ServiceLocationComponent,
    ContactComponent,
    ResourcesComponent,
    HeaderComponent,
    FooterComponent,
    SlidingBannerComponent,
    ServiceLocationCardComponent,
    MeetOurCaregiverComponent,
    CareersComponent,
    ServiceCardsComponent,
    NonDescriminationPoliciesComponent,
    ServiceOfferComponent,
    ErrorComponent,
    FlipCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
