import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebootIcon  = faFacebookSquare;
  twitterIcon = faTwitterSquare;
  curYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
