import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // font-awesome 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  isOverlayOpen: boolean = false;
  isOverlayOpenbod: boolean = false;

  // font-awesome 
  faBell = faBell;
  faInfoCircle = faInfoCircle;

  ngOnInit(): void {}
}
