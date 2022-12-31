import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from 'src/app/model/resource';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[] = [];
  constructor(private _resService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this._resService.getOffices().subscribe({
      next: (res) => {this.resources = res.resources},
      complete: () =>{},
      error: (error) => {console.log(error)}
    })
  }

  redirectTo(link: string){
    window.open(link, "_blank")
  }
}
