import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faAdd, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Office } from 'src/app/model/office';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  locationIcon = faEarthAmerica;
  phoneIcon = faPhoneVolume;
  emailIcon = faEnvelope;
  faxIcon = faFax;
  personIcon = faAddressCard;

  contactForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("^[1-9][0-9]{9}$")]),
    comment: new FormControl(null, [Validators.required])
  })
  
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.contactForm.value)
  }
}
