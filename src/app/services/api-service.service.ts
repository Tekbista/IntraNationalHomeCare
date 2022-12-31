import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl: string = '../../../assets/db.json'

  constructor(private http: HttpClient) { }

  getOffices():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
