import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // font-awesome
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  isOverlayOpen: boolean = false;
  isOverlayOpenbod: boolean = false;

  // font-awesome
  faBell = faBell;
  faInfoCircle = faInfoCircle;

  ngOnInit(): void {}

  closeSession() {
    this.authService
      .logout()
      .then((resp) => {
        this.router.navigate(['/login']);
      })
      .catch((err) => console.log(err));
  }
}
