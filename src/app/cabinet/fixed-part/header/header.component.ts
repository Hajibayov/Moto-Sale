import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public router: Router
  ) {}
  faBell = faBell;

  navigateMain() {
    this.router.navigate(['home']);
  }
}
