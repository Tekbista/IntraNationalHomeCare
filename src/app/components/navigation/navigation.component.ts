import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menuIcon = faBars;
  homeIcon = faHouse;
  infoIcon = faInfoCircle;
  serviceIcon = faBellConcierge;
  locIcon = faLocationCrosshairs;
  phoneIcon = faPhoneSquare;
  meetIcon = faHandHoldingHand;
  commentIcon = faComments;
  careerIcon = faUserDoctor;
  canvasIcon = faFilm;
  policyIcon = faScaleBalanced;
  downloadIcon = faCircleDown;

  constructor() { }

  ngOnInit(): void {
  }

  
  toggleMenu(){
    document.querySelector(".mynavbar-nav")?.classList.toggle("active")
  }

  onClick(){
    window.open("http://www.intranationalhomecarellc.com/wp-content/themes/intranational/pdf/brochure.pdf", "_blank");
  }

}
