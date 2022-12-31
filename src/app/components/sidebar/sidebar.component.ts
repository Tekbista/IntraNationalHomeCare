import { Component, OnInit } from '@angular/core';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  playIcon = faCirclePlay;
  downloadIcon = faCircleDown;
  galleryIcon = faPhotoFilm;
  
  constructor() { }

  ngOnInit(): void {
  }

}
