import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceOffer } from '../model/serviceOffer';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferService {

  URL = "../../../assets/serviceoffer.json"
  curService: ServiceOffer = {
    title: '',
    imageURL: '',
    description: [],
    supportService: []
  }

  constructor(private http: HttpClient) { }

  getServiceOffer():Observable<any>{
    return this.http.get(this.URL);
  }

  getService(title:string): Observable<any>{
    return this.http.get(`${this.URL}/${title}`)
  }

  setCurrentService(service: ServiceOffer){
    this.curService = service
  }
  
  getCurrentService(){
    return this.curService
  }
}
