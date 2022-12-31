import { Component, OnInit } from '@angular/core';
import { faAdd, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Office } from 'src/app/model/office';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-service-location-card',
  templateUrl: './service-location-card.component.html',
  styleUrls: ['./service-location-card.component.css']
})
export class ServiceLocationCardComponent implements OnInit {

  locationIcon = faEarthAmerica;
  phoneIcon = faPhoneVolume;
  emailIcon = faEnvelope;
  faxIcon = faFax;
  personIcon = faAddressCard;

  offices: Office[] = [];
  constructor(private _officeService: ApiServiceService) { }

  ngOnInit(): void {

    this._officeService.getOffices().subscribe({
      next: (res) =>{this.offices = res.serviceLocation},
      complete: () =>{},
      error: (error) =>{console.log(error)}
    })
  }

}
