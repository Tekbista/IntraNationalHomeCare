import { Component, OnInit } from '@angular/core';
import { ServiceOffer } from 'src/app/model/serviceOffer';
import { ServiceOfferService } from 'src/app/services/service-offer.service';

@Component({
  selector: 'app-service-offer',
  templateUrl: './service-offer.component.html',
  styleUrls: ['./service-offer.component.css']
})
export class ServiceOfferComponent implements OnInit {

  service: ServiceOffer = {
    title: '',
    imageURL: '',
    description: [],
    supportService: []
  }
  constructor(private _apiService: ServiceOfferService) { }

  ngOnInit(): void {
    this.service = this._apiService.getCurrentService();
  }

}
