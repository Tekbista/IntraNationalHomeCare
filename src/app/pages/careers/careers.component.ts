import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  careerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    zipCode: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    above18: new FormControl(null, [Validators.required]),
    driverLicense: new FormControl(null, [Validators.required]),
    oweCar: new FormControl(null, [Validators.required]),
    licenseType: new FormControl(null, [Validators.required]),
    shift: new FormControl(null, [Validators.required]),
    hear: new FormControl(null, [Validators.required]),
    experience: new FormControl(null, [Validators.required]),
    resume: new FormControl(null, [Validators.required]),
  })
  constructor() { }


  ngOnInit(): void {
  }

}
