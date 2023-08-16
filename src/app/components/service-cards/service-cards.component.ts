import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOffer } from 'src/app/model/serviceOffer';
import { ServiceOfferService } from 'src/app/services/service-offer.service';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent implements OnInit {

  offerServices: ServiceOffer[] = []
  constructor(private _apiService: ServiceOfferService, private router: Router) { }

  ngOnInit(): void {
    this._apiService.getServiceOffer().subscribe({
      next: (res) =>{this.offerServices = res},
      complete: () => {},
      error: (error) =>{console.log(error)}
    })
  }

  onClick(service: any){
    this._apiService.setCurrentService(service);
    this.router.navigate(['/service-offer'])
  }

}
